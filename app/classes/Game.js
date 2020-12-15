import Mobs from '../jsons/mobs.js'
import { Hero, Mob } from './Player.js'

class Game {
  constructor() {
    this._encounteredEquipment = []
    this._fightCount = 43
  }

  // -------------- GETTERS/SETTERS --------------

  get encounteredEquipment() {
    return this._encounteredEquipment
  }
  set encounteredEquipment(item) {
    this._encounteredEquipment.push(item)
  }
  get fightCount() {
    return this._fightCount
  }
  set fightCount(num) {
    this._fightCount = num
  }

  // -------------- METHODS --------------

  calculateHpBar(player) {
    return player.hp * 100 / player.hpMax
  }
  calculateStaminaBar(player) {
    return player.stamina * 100 / player.staminaMax
  }
  calculateExpBar(player) {
    return player.exp * 100 / player.expMax
  }

  generateMob() {
    let mobPack
    let randomNum
    // palier 1
    if (this.fightCount > 33) {
      mobPack = Mobs.filter(mob => mob.id <= 8)
      randomNum =
        Math.floor(Math.random() *
        (Math.ceil(8) - Math.floor(1) + 1))
        + Math.floor(1)
    }
    // premier boss
    else if (this.fightCount === 33) {
      mobPack = Mobs.filter(mob => mob.id === 9)
      randomNum = mobPack.find(mob => mob.id === 9).id
    }

    // palier 2
    else if (this.fightCount > 22) {
      mobPack = Mobs.filter(mob => mob.id >= 10 && mob.id <= 17)
      randomNum =
        Math.floor(Math.random() *
        (Math.ceil(17) - Math.floor(10) + 1))
        + Math.floor(10)
    }
    // deuxième boss
    else if (this.fightCount === 22) {
      mobPack = Mobs.filter(mob => mob.id === 18)
      randomNum = mobPack.find(mob => mob.id === 18).id
    }
    // palier 3
    else if (this.fightCount > 11) {
      mobPack = Mobs.filter(mob => mob.id >= 19 && mob.id <= 26)
      randomNum =
        Math.floor(Math.random() *
        (Math.ceil(26) - Math.floor(19) + 1))
        + Math.floor(19)
    }
    // troisième boss
    else if (this.fightCount === 11) {
      mobPack = Mobs.filter(mob => mob.id === 27)
      randomNum = mobPack.find(mob => mob.id === 27).id
    }
    // palier de la muerte
    else if (this.fightCount > 0) {
      mobPack = Mobs.filter(mob => mob.id >= 28 && mob.id <= 35)
      randomNum =
        Math.floor(Math.random() *
        (Math.ceil(30) - Math.floor(28) + 1))
        + Math.floor(28)
    }
    // boss final
    else if (this.fightCount === 0) {
      mobPack = Mobs.filter(mob => mob.id === 36)
      randomNum = mobPack.find(mob => mob.id === 36).id
    }
    // NG+
    else {
      mobPack = Mobs
      randomNum =
        Math.floor(Math.random() *
        (Math.ceil(31) - Math.floor(1) + 1))
        + Math.floor(1)
    }
    const mobPicked = mobPack.find(mob => mob.id === randomNum)

    // Construction du mob
    const name = mobPicked.name
    const strength = Math.floor(Math.random() * (mobPicked.strength[1] - mobPicked.strength[0]) ) + mobPicked.strength[0];
    const endurance = Math.floor(Math.random() * (mobPicked.endurance[1] - mobPicked.endurance[0]) ) + mobPicked.endurance[0];
    const constitution = Math.floor(Math.random() * (mobPicked.constitution[1] - mobPicked.constitution[0]) ) + mobPicked.constitution[0];
    const dexterity = Math.floor(Math.random() * (mobPicked.dexterity[1] - mobPicked.dexterity[0]) ) + mobPicked.dexterity[0];

    const items = mobPicked.items
    const expGain = mobPicked.expGain

    const mob = new Mob(name, strength, endurance, constitution, dexterity, items, expGain)
    mob.initializePlayer()

    return mob
  }
  rollDices(selectedClass = null) {
    let rolls = {}
    if (selectedClass === 'knight') {
      rolls = {
        strength: Math.floor(Math.random() * (14 - 9 + 1)) + 9,
        endurance: Math.floor(Math.random() * (15 - 11 + 1)) + 11,
        constitution: Math.floor(Math.random() * (16 - 13 + 1)) + 13,
        dexterity: Math.floor(Math.random() * (14 - 9 + 1)) + 9
      }
    }
    else if (selectedClass === "berserker") {
      rolls = {
        strength: Math.floor(Math.random() * (16 - 13 + 1)) + 13,
        endurance: Math.floor(Math.random() * (14 - 9 + 1)) + 9,
        constitution: Math.floor(Math.random() * (15 - 11 + 1)) + 11,
        dexterity: Math.floor(Math.random() * (14 - 9 + 1)) + 9,
      }
    }
    else if (selectedClass === "thief") {
      rolls = {
        strength: Math.floor(Math.random() * (14 - 9 + 1)) + 9,
        endurance: Math.floor(Math.random() * (15 - 11 + 1)) + 11,
        constitution: Math.floor(Math.random() * (14 - 9 + 1)) + 9,
        dexterity: Math.floor(Math.random() * (16 - 13 + 1)) + 13,
      }
    }
    return rolls
  }
}

export default Game