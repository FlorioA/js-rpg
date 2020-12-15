import Game from './Game.js'

class Player {
  constructor(
    name,
    strength,
    endurance,
    constitution,
    dexterity,
  ) {
    this._name            = name              // string

    this._hp                                  // int
    this._hpMax                               // int
    this._stamina                             // int
    this._staminaMax                          // int

    this._strength        = strength          // int / 20
    this._endurance       = endurance         // int / 20
    this._constitution    = constitution      // int / 20
    this._dexterity       = dexterity         // int / 20

  }

// -------------- GETTERS/SETTERS --------------

get name() {
  return this._name
}
set name(name) {
  this._name = name
}

// -----------------------------------------------

get hp() {
  return this._hp
}
set hp(hp) {
  this._hp = hp
}
get hpMax() {
  return this._hpMax
}
set hpMax(hpMax) {
  this._hpMax = hpMax
}
get stamina() {
  return this._stamina
}
set stamina(stamina) {
  this._stamina = stamina
}
get staminaMax() {
  return this._staminaMax
}
set staminaMax(staminaMax) {
  this._staminaMax = staminaMax
}

// -----------------------------------------------

get strength() {
  return this._strength
}
set strength(s) {
  this._strength = s
}
get endurance() {
  return this._endurance
}
set endurance(e) {
  this._endurance = e
}
get constitution() {
  return this._constitution
}
set constitution(c) {
  this._constitution = c
}
get dexterity() {
  return this._dexterity
}
set dexterity(d) {
  this._dexterity = d
}


  // -------------- METHODS --------------

  initializePlayer() {
    // setup HP
    this.hp = this.constitution * 10
    this.hpMax = this.constitution * 10
    // setup stamina
    this.stamina = this.endurance * 2
    this.staminaMax = this.endurance * 2
  }

  // ----------- Fight
  hit() {
    let arme
    this.equipped ? arme = this.equipped.find(item => item.stats.type === 0) : arme = null

    const damage = this.strength * 2

    if (arme)
      return Math.round(Math.ceil(Math.random() * (damage - (damage / 2) + 1)) + (damage / 2) + arme.stats.stats + this.stamina)
    else
      return Math.round(Math.ceil(Math.random() * (damage - (damage / 2) + 1)) + (damage / 2) + this.stamina)
  }
  defend(damage) {
    let protections = []
    let armor = 0
    if (this.equipped)
      if (this.equipped.length > 0) protections = this.equipped.filter(item => item.stats.type === 1)

    if (protections.length > 0)
      protections.forEach(protection => armor += protection.stats.stats)

    if (armor) {
      let finalDamage = (- damage + armor + (Math.ceil(this.stamina/2)))
      if (finalDamage > 0) finalDamage = 0
      this.hp += finalDamage
      return finalDamage
    }
    else {
      let finalDamage = (- damage + (Math.ceil(this.stamina/2)))
      if (finalDamage > 0) finalDamage = 0
      this.hp += finalDamage
      return finalDamage
    }
  }
}

class Hero extends Player {
  constructor(name, strength,endurance, constitution, dexterity, level = 1) {
    super(name, strength,endurance, constitution, dexterity)

    this._exp             = 0                 // int
    this._expMax          = 500               // int
    this._pC              = 0
    this._inventory       = [
      {
        "name": "healthPotionS",
        "stats": {
          "id": "1",
          "itemType": "consumable",
          "name": "Potion de soin mineure",
          "stats": 90,
          "buffTarget": "hp",
          "dropRate": ".3"
        }
      },
      {
        "name": "staminaPotionS",
        "stats": {
          "id": "4",
          "itemType": "consumable",
          "name": "Potion d'énergie mineure",
          "stats": 10,
          "buffTarget": "stamina",
          "dropRate": ".3"
        }
      }
    ]                    // array
    this._equipped        = []                    // array
    this._level           = level             // int
    this._buffs           = []

  }

  get exp() {
    return this._exp
  }
  set exp(exp) {
    this._exp = exp
  }
  get expMax() {
    return this._expMax
  }
  set expMax(expMax) {
    this._expMax = expMax
  }
  get pC() {
    return this._pC
  }
  set pC(pC) {
    this._pC = pC
  }
  get inventory() {
    return this._inventory
  }
  set inventory(item) {
    this._inventory.push(item)
  }
  get equipped() {
    return this._equipped
  }
  set equipped(item) {
    this._equipped.push(item)
  }
  get level() {
    return this._level
  }
  set level(level) {
    this._level = level
  }
  get buffs() {
    return this._buffs
  }
  set buffs(buff) {
    this._buffs.push(buff)
  }

  levelup(expGain) {
    this.exp += expGain
    // Check les conditions pour la montée de niveau
    if (this.exp >= this.expMax) {
      const overExp = this.exp - this.expMax
      this.exp = 0 + overExp
      this.expMax *= 1.5
      this.level++
      this.pC++
    }
  }
  upgradeComp(stat) {
    switch(stat) {
      case 'strength':
        this.strength++
        break
      case 'endurance':
        this.endurance++
        break
      case 'constitution':
        this.constitution++
        break
      case 'dexterity':
        this.dexterity++
        break
    }
    this.initializePlayer()
    this.pC--
  }

  updateBuffs() {
    for(const [i, buff] of this.buffs.entries()) {
      buff.time--
      if (buff.time <= 0) {
        // enlève le buff sur la stat
        let updatedStat
        if (buff.target === 'strength') {
          updatedStat = Number(this.strength) - Number(buff.stat)
          this.strength = updatedStat
        }
        else if (buff.target === 'endurance') {
          updatedStat = Number(this.endurance) - Number(buff.stat)
          this.endurance = updatedStat
          this.staminaMax = this.endurance * 2
        }
        else if (buff.target === 'constitution') {
          updatedStat = Number(this.constitution) - Number(buff.stat)
          this.constitution = updatedStat
          this.hpMax = this.constitution * 10
        }
        else if (buff.target === 'dexterity') {
          updatedStat = Number(this.dexterity) - Number(buff.stat)
          this.dexterity = updatedStat
        }
        // suppression dans buffs
        this.buffs.splice(i)
      }
    }
  }
  use(item) {
    // Si soin ou stamina
    if (item.stats.id <= 6) {
      if (item.stats.buffTarget === 'hp') {
        const heal = this.hp += item.stats.stats
        if (heal > this.hpMax) this.hp = this.hpMax
      }
      else {
        const heal = this.stamina += item.stats.stats
        if (heal > this.staminaMax) this.stamina = this.staminaMax
      }
    }
    // Si buff temporaire
    else {
      this.buffs = {
        stat: item.stats.stats,
        target: item.stats.buffTarget,
        time: item.stats.time
      }
      let updatedStat
      if (item.stats.buffTarget === 'strength') {
        updatedStat = Number(this.strength) + Number(item.stats.stats)
        this.strength = updatedStat
      }
      else if (item.stats.buffTarget === 'endurance') {
        updatedStat = Number(this.endurance) + Number(item.stats.stats)
        this.endurance = updatedStat
        this.stamina = this.endurance * 2
        this.staminaMax = this.endurance * 2
      }
      else if (item.stats.buffTarget === 'constitution') {
        updatedStat = Number(this.constitution) + Number(item.stats.stats)
        this.constitution = updatedStat
        this.hp = this.constitution * 10
        this.hpMax = this.constitution * 10
      }
      else if (item.stats.buffTarget === 'dexterity') {
        updatedStat = Number(this.dexterity) + Number(item.stats.stats)
        this.dexterity = updatedStat
      }
    }
    const indexToRemove = this.inventory.findIndex(itemToRemove => item.stats.id === itemToRemove.stats.id)
    this.inventory.splice(indexToRemove, 1)

  }


  equip(itemIn) {
    // Si l'objet n'est pas une arme
    if (itemIn.stats.type !== 0) {
      this.equipped = itemIn
      const indexToRemove = this.inventory.findIndex(item => item.stats.id === itemIn.stats.id)
      this.inventory.splice(indexToRemove, 1)
    }
    else {
      // Si l'équipement n'est pas vide
      if (this.equipped.length) {
        // on cherche l'objet du même type
        let doublon = this.equipped.find(item => item.stats.type === 0)
        if (!doublon) {
          // Si on ne le trouve pas, on ajoute l'objet qu'on voulait ajouter
          this.equipped = itemIn
          const indexToRemove = this.inventory.findIndex(item => item.stats.id === itemIn.stats.id)
          this.inventory.splice(indexToRemove, 1)
        }
        else {
          // Si on le trouve, on inverse les deux objets
          // on les enlève de leur case
          const indexEToRemove = this.equipped.findIndex(item => item.stats.id === doublon.stats.id)
          this.equipped.splice(indexEToRemove, 1)
          const indexIToRemove = this.inventory.findIndex(item => item.stats.id === itemIn.stats.id)
          this.inventory.splice(indexIToRemove, 1)
          // puis on les ajoute dans leur nouvelle case

          this.equipped = itemIn
          // this.inventory = doublon
        }
      }
      else {
        this.equipped = itemIn
        const indexIToRemove = this.inventory.findIndex(item => item.stats.id === itemIn.stats.id)
        this.inventory.splice(indexIToRemove, 1)
      }
    }

    // Si équipment buff
    if (itemIn.stats.type === 2) {
      let updatedStat
      if (itemIn.stats.buffTarget === 'strength') {
        updatedStat = Number(this.strength) + Number(itemIn.stats.stats)
        this.strength = updatedStat
      }
      else if (itemIn.stats.buffTarget === 'endurance') {
        updatedStat = Number(this.endurance) + Number(itemIn.stats.stats)
        this.endurance = updatedStat
        this.staminaMax = this.endurance * 2
      }
      else if (itemIn.stats.buffTarget === 'constitution') {
        updatedStat = Number(this.constitution) + Number(itemIn.stats.stats)
        this.constitution = updatedStat
        this.hpMax = this.constitution * 10

      }
      else if (itemIn.stats.buffTarget === 'dexterity') {
        updatedStat = Number(this.dexterity) + Number(itemIn.stats.stats)
        this.dexterity = updatedStat
      }
    }
  }
  unequip(itemToRemove) {
    const indexToRemove = this.equipped.findIndex(item => itemToRemove.stats.id === item.stats.id)
    this.equipped.splice(indexToRemove, 1)

    this.inventory = itemToRemove

    // Si équipment buff
    if (itemToRemove.stats.type === 2) {
      let updatedStat
      if (itemToRemove.stats.buffTarget === 'strength') {
        updatedStat = Number(this.strength) - Number(itemToRemove.stats.stats)
        this.strength = updatedStat
      }
      else if (itemToRemove.stats.buffTarget === 'endurance') {
        updatedStat = Number(this.endurance) - Number(itemToRemove.stats.stats)
        this.endurance = updatedStat
        this.staminaMax = this.endurance * 2
      }
      else if (itemToRemove.stats.buffTarget === 'constitution') {
        updatedStat = Number(this.constitution) - Number(itemToRemove.stats.stats)
        this.constitution = updatedStat
        this.hpMax = this.constitution * 10
      }
      else if (itemToRemove.stats.buffTarget === 'dexterity') {
        updatedStat = Number(this.dexterity) - Number(itemToRemove.stats.stats)
        this.dexterity = updatedStat
      }
    }
  }
}

class Mob extends Player {
  constructor(name, strength, endurance, constitution, dexterity, items, expGain) {
    super(name, strength,endurance, constitution, dexterity)

    this._items = items
    this._expGain = expGain
  }

  get items() {
    return this._items
  }
  get expGain() {
    return this._expGain
  }
  
  drop(items, game, hero) {
    items.forEach(item => {
      // Jet pour savoir si drop ou pas
      if (item.stats.dropRate <= Math.random()) {
        if (item.stats.itemType === 'equipment') {
          if (game.encounteredEquipment.length === 0) {
            game.encounteredEquipment = item
            hero.inventory = item
          }
          else {
            const found = game.encounteredEquipment.find(itemE => itemE.stats.id === item.stats.id)
            if (!found) {
              game.encounteredEquipment = item
              hero.inventory = item
            }
          }
        }
        else
          hero.inventory = item
      }
    })
  }
}



export { Hero, Mob }

