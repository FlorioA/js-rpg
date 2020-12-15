class Player {
  constructor(name, life, force, modifier = null) {
    this._name = name
    this._life = life
    this._force = force
    this._modifier = modifier
    this._shot = 0
    this._exp = 0
    this._lvl = 1
  }
  hit() {
    this._shot++

    if (this._modifier._stance === "atk")
      return Math.round(Math.floor(Math.random() * (this._force - (this._force / 2) + 1)) + (this._force / 2) + this._modifier._stat)
    else
      return Math.round(Math.floor(Math.random() * (this._force - (this._force / 2) + 1)) + (this._force / 2))
  }
  takeDamage(damage) {
    if (this._modifier.stance === "def")
      this._life -= damage - this._modifier._stat
    else
      this._life -= damage
  }

  get name() {
    return this._name
  }
  get life() {
    return this._life
  }
  get force() {
    return this._force
  }
  get modifier() {
    return this._modifier
  }
  get shot() {
    return this._shot
  }
  set exp(exp) {
    this._exp += exp
  }
  get lvl() {
    return this._lvl
  }
}
class Dragon extends Player {
}
class Knight extends Player {
}
class Modifier {
  constructor(stance, stat) {
    this._stance = stance
    this._stat = stat
  }
}


class Game {
  constructor(player1, player2) {
    this._player1 = player1
    this._player2 = player2
  }
  run() {
    let round = 1
    while (this._player1.life > 0 && this._player2.life > 0) {
      // tant que les deux persos sont en vie, on lance un nouveau combat
      const initiative = Math.random()
      let attackingP
      let defendingP

      // random entre 0 et .5 c'est l'un, .5 et 1 c'est l'autre qui frappe
      if (initiative < .5) {
        attackingP = this._player1
        defendingP = this._player2
      }
      else {
        attackingP = this._player2
        defendingP = this._player1
      }

      // Combien de points de vie vont être retirés à l'adversaire (hit)
      const damage = attackingP.hit()

      // Décrémenter assaillant
      defendingP.takeDamage(damage)

      console.log('Round ' + round + ' :')
      console.log(`${attackingP.name} inflige ${damage} points de dégâts à ${defendingP.name}!`)

      round++
    }
    const winner = this._player1.life > this._player2.life ? this._player1 : this._player2

    winner.exp = Math.floor(Math.random() * Math.floor(10 * winner.lvl))

    console.log(`${this._player1.name} : ${this._player1.life} PV restants ||| ${this._player2.name} : ${this._player2.life} PV restants`)
    console.log(`${winner.name} remporte cette victoire en ayant porté ${winner.shot} coups !`)
  }
}

// création des instances
const epee = new Modifier("atk", 7)
const flammesDivines = new Modifier("atk", 5)
const armureFer = new Modifier("def", 5)
const ecaillesMetalliques = new Modifier("def", 7)

const dragon = new Dragon("Magyar à pointes", 150, 10, ecaillesMetalliques)
const knight = new Knight("Geoffroi le Valeureux", 100, 15, epee)

const game = new Game(dragon, knight)


// lancement du jeu
game.run()