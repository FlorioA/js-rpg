import { Hero, Mob } from "./classes/Player.js"
import { Equipment, Consumable } from "./classes/Item.js"
import Fight from "./classes/Fight.js"
import Game from './classes/Game.js'
import Items from './jsons/items.js'

$(document).ready(function() {
  // ------------------------------ SETUP ------------------------------
  // Initialize tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger : 'hover' })
  })

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX RECUP INPUTS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  
  let hero
  let mob
  const game = new Game()


  const creationPage = $('#creation_page')
  const gamePage = $('#game_page')
  const endPage = $('#end_page')
  // Récupère inputs creation page
  const classesRadioBtns = $('#class_selection_group label input')
  const createHeroBtn = $('#create_hero')
  const rerollDicesBtn = $('#reroll')

  const heroNameInput = $('#hero_name')
  let selectedClass = null
  const strengthInput = $('#hero_strength')
  const enduranceInput = $('#hero_endurance')
  const constitutionInput = $('#hero_constitution')
  const dexterityInput = $('#hero_dexterity')

  const form = $('#creation_form')

  // Récupère inputs game page
  // Log
  const btnLaunchF = $('#launch_fight')
  const btnGameOver = $('#gameover_btn')
  const btnSeeNext = $('#seenext_btn')
  const logCard = $('#log_card')
  const log = document.querySelector('#log_card .card-body')

  // hero
  const displayName = $('#name_pstat')
  const displayClass = $('#class_pstat')
  const displayLevel = $('#level_pstat')

  const pcBtns = $('.pc_btn')
  const displayExpBar = $('#exp_bar')
  const displayHp = $('#hp_pstat')
  const displayHpMax = $('#hpMax_pstat')
  const displayHpBar = $('#hp_bar')
  const displayStamina = $('#stamina_pstat')
  const displayStaminaMax = $('#staminaMax_pstat')
  const displayStaminaBar = $('#stamina_bar')

  const displayStrength = $('#strength_pstat')
  const displayEndurance = $('#endurance_pstat')
  const displayConstitution = $('#constitution_pstat')
  const displayDexterity = $('#dexterity_pstat')

  const displayDamage = $('#damage_pstat')
  const displayProtection = $('#shield_pstat')

  // mob
  const displayMobName = $('#name_mstat')

  const displayMobHp = $('#hp_mstat')
  const displayMobHpMax = $('#hpMax_mstat')
  const displayMobHpBar = $('#hp_mbar')
  const displayMobStamina = $('#stamina_mstat')
  const displayMobStaminaMax = $('#staminaMax_mstat')
  const displayMobStaminaBar = $('#stamina_mbar')

  const displayMobStrength = $('#strength_mstat')
  const displayMobEndurance = $('#endurance_mstat')
  const displayMobConstitution = $('#constitution_mstat')
  const displayMobDexterity = $('#dexterity_mstat')

  const displayFightCount = $('#fight_count')


  // inventory
  const equipmentList = $('#equipment_card .card-body')
  const inventoryList = $('#inventory_card .card-body')
  let equipmentListBtns
  let inventoryListBtns


  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX METHODES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // -------------------- AFFICHER STATS --------------------
  const updateHeroStats = () => {
    displayLevel.html(hero.level)

    displayExpBar.attr('style', `width: ${game.calculateExpBar(hero)}%`)
    displayHp.html(hero.hp)
    displayHpMax.html(hero.hpMax)
    displayHpBar.attr('style', `width: ${game.calculateHpBar(hero)}%`)
    displayStamina.html(hero.stamina)
    displayStaminaMax.html(hero.staminaMax)
    displayStaminaBar.attr('style', `width: ${game.calculateStaminaBar(hero)}%`)

    // Si points de compétence
    if (hero.pC > 0) {
      for (const btn of pcBtns) {
        btn.classList.remove('d-none')
      }
    }
    else {
      for (const btn of pcBtns) {
        if (!btn.classList.contains('d-none'))
          btn.classList.add('d-none')
      }
    }

    // Gestion stats et buffs
    displayStrength.html(hero.strength)
    displayEndurance.html(hero.endurance)
    displayConstitution.html(hero.constitution)
    displayDexterity.html(hero.dexterity)

    // Si y a des buffs
    const runes = hero.equipped
      .filter(equipment => equipment.stats.type === 2)
      .map(equipment => {
        return {
          stat: equipment.stats.stats,
          target: equipment.stats.buffTarget
        }
      })
    const buffs = hero.buffs.concat(runes)
    if (buffs.length !== 0) {
      for (const buff of buffs) {
        if (buff.target === 'strength')
          displayStrength.html(`<span class="font-weight-bold">${hero.strength}</span>`)
        else if (buff.target === 'endurance')
          displayEndurance.html(`<span class="font-weight-bold">${hero.endurance}</span>`)
        else if (buff.target === 'constitution')
          displayConstitution.html(`<span class="font-weight-bold">${hero.constitution}</span>`)
        else if (buff.target === 'dexterity')
          displayDexterity.html(`<span class="font-weight-bold">${hero.dexterity}</span>`)
      }
    }



    // Affichage dégâts
    let arme
    let damageDealingMin
    let damageDealingMax
    const damageBruts = hero.strength * 2
    hero.equipped.length ? arme = hero.equipped.find(item => item.stats.type === 0) : arme = null
    if (arme) {
      damageDealingMin = Number(Math.ceil(damageBruts/2)) + Number(arme.stats.stats) + Number(hero.stamina)
      damageDealingMax = Number(damageBruts) + Number(arme.stats.stats) + Number(hero.stamina)
    }
    else {
      damageDealingMin = Number(Math.ceil(damageBruts/2)) + Number(hero.stamina)
      damageDealingMax = Number(damageBruts) + Number(hero.stamina)
    }
    displayDamage.html(`${damageDealingMin} - ${damageDealingMax}`)

    // Affichage protection
    let armor = 0
    let protections = []
    if (hero.equipped.length) protections = hero.equipped.filter(item => item.stats.type === 1)
    if (protections.length) protections.forEach(protection => armor += protection.stats.stats)
    displayProtection.html(armor)
  }
  const setupHeroStats = () =>  {
    displayName.html(hero.name)
    if (selectedClass.id === 'knight') displayClass.html('Chevalier')
    if (selectedClass.id === 'berserker') displayClass.html('Barbare')
    if (selectedClass.id === 'thief') displayClass.html('Voleur')

    updateHeroStats()
  }

  const updateMobStats = () => {
    displayMobHp.html(mob.hp)
    displayMobHpBar.removeAttr('style')
    displayMobHpBar.attr('style', `width: ${game.calculateHpBar(mob)}%`)
    displayMobStamina.html(mob.stamina)
    displayMobStaminaBar.removeAttr('style')
    displayMobStaminaBar.attr('style', `width: ${game.calculateStaminaBar(mob)}%`)

    // palier 2
    if (game.fightCount >= 22 && game.fightCount <= 32) {
      displayFightCount.removeClass('text-success')
      displayFightCount.addClass('text-warning')
    }
    // palier 3
    else if (game.fightCount >= 11 && game.fightCount <= 21) {
      displayFightCount.removeClass('text-warning')
      displayFightCount.addClass('text-danger')
    }
    // palier de la muerte
    else if (game.fightCount >= 0 && game.fightCount <= 10) {
      displayFightCount.removeClass('text-danger')
      displayFightCount.addClass('text-dark')
    }
    else if (game.fightCount < 0) {
      displayFightCount.removeClass('text-dark')
      displayFightCount.addClass('text-secondary')
    }
    displayFightCount.html(game.fightCount)
  }
  const setupMobStats = () => {
    if (
      game.fightCount === 33 ||
      game.fightCount === 22 ||
      game.fightCount === 11 ||
      game.fightCount === 0)
        displayMobName.addClass('text-danger')
    else if (displayMobName.hasClass('text-danger'))
      displayMobName.removeClass('text-danger')
    
    displayMobName.html(mob.name)
    updateMobStats()
    displayMobHpMax.html(mob.hpMax)
    displayMobStaminaMax.html(mob.staminaMax)
    displayMobStrength.html(mob.strength)
    displayMobEndurance.html(mob.endurance)
    displayMobConstitution.html(mob.constitution)
    displayMobDexterity.html(mob.dexterity)
  }

  // -------------------- GESTION INVENTAIRES --------------------
  const updateInventory = (items) => {
    let buttons = []
    items.forEach(item => {
      if (item.stats.itemType === 'equipment') {
        if (item.stats.type === 0) {
          buttons.push(`<button data-order="4"
          data-id="${item.stats.id}"
          type="button"
          class="btn btn-outline-dark m-1">${item.stats.name}</button>`)
        }
        else {
          buttons.push(`<button data-order="4"
          data-id="${item.stats.id}"
          type="button"
          class="btn btn-outline-dark m-1">${item.stats.name}</button>`)
        }
      }
      else {
        if (item.stats.buffTarget === 'hp') {
          buttons.push(`<button data-order="1"
          data-id="${item.stats.id}"
          type="button"
          class="btn btn-outline-danger m-1">${item.stats.name}</button>`)
        }
        else if (item.stats.buffTarget === 'stamina') {
          buttons.push(`<button data-order="2"
          data-id="${item.stats.id}"
          type="button"
          class="btn btn-outline-success m-1">${item.stats.name}</button>`)
        }
        else {
          buttons.push(`<button data-order="3"
          data-id="${item.stats.id}"
          type="button"
          class="btn btn-outline-info m-1">${item.stats.name}</button>`)
        }
      }
    })
    buttons.sort()
    inventoryList.html(buttons)

    // Event sur les boutons
    inventoryListBtns = $('#inventory_card .card-body button')
    for (const btn of inventoryListBtns) {
      btn.addEventListener('click', (evt) => {
        // Récup l'item cliqué correspondant
        let item
        let btnId = evt.target.getAttribute('data-id')

        hero.inventory.forEach(itemI => {
          if (itemI.stats.id === btnId)
            item = itemI
        })

        // Définit si équipement ou consumable
        if (item.stats.itemType === 'equipment') {
          hero.equip(item)
          updateInventory(hero.inventory)
          updateEquipment(hero.equipped)
          updateHeroStats()
        }
        else {
          hero.use(item)
          updateInventory(hero.inventory)
          updateEquipment(hero.equipped)
          updateHeroStats()
        }
      })
    }
  }

  const updateEquipment = (items) => {
    let buttons = []
    items.forEach(item => {
      if (item.stats.type === 0) {
        buttons.push(`<button data-order="1" type="button" class="btn btn-block btn-outline-danger m-1" data-id="${item.stats.id}" disabled>${item.stats.name}</button>`)
      }
      else if (item.stats.type === 1) {
        buttons.push(`<button data-order="2" type="button" class="btn btn-block btn-outline-success m-1" data-id="${item.stats.id}" disabled>${item.stats.name}</button>`)
      }
      else {
        buttons.push(`<button data-order="3" type="button" class="btn btn-block btn-outline-warning m-1" data-id="${item.stats.id}" disabled>${item.stats.name}</button>`)
      }
    })
    buttons.sort()
    equipmentList.html(buttons)

    // Event sur les boutons
    equipmentListBtns = $('#equipment_card .card-body button')
    for (const btn of equipmentListBtns) {
      btn.addEventListener('click', (evt) => {
        // Récup l'item cliqué correspondant
        let item
        let btnId = evt.target.getAttribute('data-id')

        hero.equipped.forEach(itemI => {
          if (itemI.stats.id === btnId)
            item = itemI
        })

        hero.unequip(item)
        updateInventory(hero.inventory)
        updateEquipment(hero.equipped)
        updateHeroStats()
      })
    }
  }

  // Event sur les boutons de Compétences
  for (const btn of pcBtns) {
    btn.addEventListener('click', (evt) => {
      hero.upgradeComp(evt.target.getAttribute('data-stat'))
      updateHeroStats()
    })
  }


  // -------------------- AFFICHAGE COMBAT --------------------
  const showLogAndUpdatePage = function (target, message, index, interval) {   
    if (index < message.length) {
      // Display round
      $(target).append(message[index++]);

      // POST COMBAT
      if (index == message.length-1) {
        btnSeeNext.removeAttr('disabled')
        updateHeroStats()
        updateMobStats()

        // Check si game over
        if (hero.hp > 0) {
          // Looting
          mob.drop(mob.items, game, hero)
          updateInventory(hero.inventory)
          // Fin du jeu
          if (game.fightCount === -1) {
            endPage.css('display', 'block')
          }
        }
        else {
          btnLaunchF.css('display', 'none')
          btnSeeNext.css('display', 'none')
          btnGameOver.css('display', 'block')
        }
      }

      // Scroll down
      logCard.scrollTop(logCard.prop("scrollHeight"))
      // Repeat
      setTimeout(function () {
        showLogAndUpdatePage(target, message, index, interval);
      }, interval);
    }
  }

  // ------------------------------ MAIN CODE ------------------------------
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX CREATION PAGE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // ---------- Enable ou disable les boutons
  heroNameInput.on('input', (evt) => {
    if (selectedClass !== null && heroNameInput.val() !== '') createHeroBtn.removeAttr('disabled')
    if (!heroNameInput.val()) createHeroBtn.attr('disabled', '')
  })

  // ---------- Stat roll en fonction de la classe sélectionnée
  classesRadioBtns.on('change', (evt) => {
    // Enable buttons si possible
    if (rerollDicesBtn.prop('disabled')) rerollDicesBtn.removeAttr('disabled')
    if (heroNameInput.val() != '') createHeroBtn.removeAttr('disabled')

    selectedClass = evt.target
    const rolls = game.rollDices(selectedClass.id)

    // Affichage des résultats du roll dans le form
    strengthInput.val(rolls.strength)
    enduranceInput.val(rolls.endurance)
    constitutionInput.val(rolls.constitution)
    dexterityInput.val(rolls.dexterity)
  })
  rerollDicesBtn.on('click', (evt) => {
    selectedClass = document.querySelector('#class_selection_group label input:checked')
    if (selectedClass !== null) {
      const rolls = game.rollDices(selectedClass.id)

      // Affichage des résultats du roll dans le form
      strengthInput.val(rolls.strength)
      enduranceInput.val(rolls.endurance)
      constitutionInput.val(rolls.constitution)
      dexterityInput.val(rolls.dexterity)
    }
  })

  // ---------- SETUP GAME PAGE
  form.on('submit', (evt) => {
    evt.preventDefault()

    // Initialize hero
    const name = heroNameInput.val()
    const strength = strengthInput.val()
    const endurance = enduranceInput.val()
    const constitution = constitutionInput.val()
    const dexterity = dexterityInput.val()

    hero = new Hero(name, strength, endurance, constitution, dexterity)
    hero.initializePlayer()

    // Generate mob
    mob = game.generateMob()

    // ---------- Setup de game page
    setupHeroStats()
    setupMobStats()

    // Change de page
    creationPage.css('display', 'none')
    gamePage.css('display', 'block')
  })



  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX GAME PAGE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // ---------- Fight
  // Quand le bouton lance le fight
  btnLaunchF.on('click', (evt) => {
    // Setup bouton
    btnSeeNext.css('display', 'block')
    btnSeeNext.attr('disabled', '')
    btnLaunchF.css('display', 'none')

    const fight = new Fight(hero, mob, game)
    const fightLog = fight.run()

    // Affiche le fight et Setup la suite
    fightLog.unshift(`<ul class="border-top">`)
    fightLog.push(`</ul>`)
    showLogAndUpdatePage(log, fightLog, 0, 300)
  })

  // Setup prochain combat
  btnSeeNext.on('click', (evt) => {
    // Setup bouton
    btnSeeNext.css('display', 'none')
    btnLaunchF.css('display', 'block')

    mob = game.generateMob()
    mob.initializePlayer()
    setupMobStats()
  })

  // Restart button
  btnGameOver.on('click', (evt) => {
    document.location.reload()
  })
})