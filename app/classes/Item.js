class Item {
  constructor(name, stats) {
    this._name = name
    this._stats = stats
  }

  // -------------- METHODS --------------


  // -------------- GETTERS/SETTERS --------------

  get name() {
    return this._name
  }
  get stats() {
    return this._stats
  }
}

class Equipment extends Item {
  constructor(name, stats, type) {
    super(name, stats)

    this._type = type       // boolean | true = atk, false = def
  }

  get type() {
    return this._type
  }
  set type(type) {
    this._type = type
  }
}

class Consumable extends Item {
  constructor(name, stats, buffTarget, timeEffect = 0) {
    super(name, stats)

    this._timeEffect = timeEffect
    this._buffTarget = buffTarget
  }

  get timeEffect() {
    return this._timeEffect
  }
  set timeEffect(tE) {
    this._timeEffect = tE
  }
  get buffTarget() {
    return this._buffTarget
  }
  set buffTarget(bT) {
    this._buffTarget = bT
  }
}

export { Equipment, Consumable }