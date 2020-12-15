class Fight {
  constructor(hero, mob, game) {
    this._hero = hero
    this._mob = mob
    this._game = game
  }


// -------------- GETTERS/SETTERS --------------

  get hero() {
    return this._hero
  }
  set hero(hero) {
    this._hero = hero
  }
  get mob() {
    return this._mob
  }
  get game() {
    return this._game
  }
  set game(game) {
    this._game = game
  }


  // -------------- METHODS --------------

  defineColors(winOrAtk, loosOrDef) {
    let winOrAtkP
    let winOrAtkPColor
    let loosOrDefP
    let loosOrDefPColor
    let damageColor
    let roundSetup

    if (winOrAtk === this.hero) {
      winOrAtkP = this.hero
      loosOrDefP = this.mob
  
      winOrAtkPColor = 'text-success font-weight-bold'
      loosOrDefPColor = 'text-danger font-weight-bold'
      damageColor     = 'text-success font-weight-bold'
    }
    else {
      winOrAtkP = this.mob
      loosOrDefP = this.hero

      winOrAtkPColor = 'text-danger font-weight-bold'
      loosOrDefPColor = 'text-success font-weight-bold'
      damageColor     = 'text-danger font-weight-bold'
    }

    return roundSetup = {
      winOrAtkP,
      loosOrDefP,
      winOrAtkPColor,
      loosOrDefPColor,
      damageColor
    }
  }
  
  run() {
    let round = 1
    let log = []
    let items = []

    let roundSetup
    let fightResult

    // tant que les deux persos sont en vie, on lance un nouveau combat
    while (this.hero.hp > 0 && this.mob.hp > 0) {
      // Décider de l'initiative
      const maxInitiative = Number(this.hero.dexterity) + Number(this.mob.dexterity)
      const initiative = Math.round(Math.random() * (maxInitiative - 1) + 1)

      // si l'initiative est entre 0 et l'initiative du joueur, il joue
      if ( initiative < this.hero.dexterity)
        roundSetup = this.defineColors(this.hero, this.mob)
      else
        roundSetup = this.defineColors(this.mob, this.hero)

      // Attaque
      const damage = roundSetup.winOrAtkP.hit()
      // Défense
      const finalDamage = roundSetup.loosOrDefP.defend(damage)

      // Log
      const attackingLog = `<span class="${roundSetup.winOrAtkPColor}">${roundSetup.winOrAtkP.name}</span>`
      const defendingLog = `<span class="font-weight-bold">${roundSetup.loosOrDefP.name}</span>`
      const damageLog = `<span class="font-weight-bold">${damage}</span>`
      const finalDamageLog = `<span class="${roundSetup.damageColor}">${-finalDamage}</span>`
      
      //<li class="font-weight-bold font-italic text-muted"></li>

      log.push(`
        <div class="row border-top">
          <div class="col-sm-3 text-muted font-italic">Round ${round} :</div>
          <div class="col-sm-9">
            <p class="m-0">${attackingLog} inflige ${damageLog} points de dégâts !</p>
            <p class="m-0">${defendingLog} perd ${finalDamageLog} PV !</p>
          </div>
        </div>
      `)
      // log.push(`${defendingLog} perd ${finalDamageLog} PV !</div>`)

      roundSetup.loosOrDefP.hp < 0 ? roundSetup.loosOrDefP.hp = 0 :
      round++

      if (this.hero.stamina > 0) this.hero.stamina--
      if (this.mob.stamina > 0) this.mob.stamina--
    }

    // ----------------- Results
    if (this.hero.hp > this.mob.hp) {
      fightResult = this.defineColors(this.hero, this.mob)

      // Update statuses
      this.game.fightCount--
      if (this.hero.buffs) this.hero.updateBuffs()
      this.hero.levelup(this.mob.expGain)
    }
    else
      fightResult = this.defineColors(this.mob, this.hero)

    // Log
    const winnerNameLog = `<span class="${fightResult.winOrAtkPColor}">${fightResult.winOrAtkP.name}</span>`
    const winnerHpLog = `<span class="${fightResult.winOrAtkPColor}">${fightResult.winOrAtkP.hp}</span>`
    const looserNameLog = `<span class="${fightResult.loosOrDefPColor}">${fightResult.loosOrDefP.name}</span>`
    const looserHpLog = `<span class="${fightResult.loosOrDefPColor}">${fightResult.loosOrDefP.hp}</span>`

    log.push(`
      <div class="row border-top">
        <div class="col-sm-6 border-right">
          <p class="text-center">${winnerNameLog} : ${winnerHpLog} PV restants</p>
        </div>
        <div class="col-sm-6 border-left">
          <p class="text-center">${looserNameLog} : ${looserHpLog} PV restants</p>
        </div>
      </div>
    `)

    if (fightResult.winOrAtkP === this.hero)
      log.push(`
      <div class="row border-top">
        <div class="col-12">
          <p class="text-center">${winnerNameLog} remporte cette victoire !</li>
        </div>
      </div>
    `)
    else
      log.push(`
      <div class="row border-top">
        <div class="col-12">
          <p class="text-center">${winnerNameLog} remporte cette victoire !</li>
        </div>
      </div>
    `)




    return log
  }
}

export default Fight