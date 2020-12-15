export default [
  // -------------------------- HEALTH / STAMINA --------------------------
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
    "name": "healthPotionM",
    "stats": {
      "id": "2",
      "itemType": "consumable",
      "name": "Potion de soin",
      "stats":120,
      "buffTarget": "hp",
      "dropRate": ".3"
      }
  },
  {
    "name": "healthPotionL",
    "stats": {
      "id": "3",
      "itemType": "consumable",
      "name": "Potion de soin majeure",
      "stats": 150,
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
  },
  {
    "name": "staminaPotionM",
    "stats": {
      "id": "5",
      "itemType": "consumable",
      "name": "Potion d'énergie",
      "stats": 25,
      "buffTarget": "stamina",
      "dropRate": ".3"
    }
  },
  {
    "name": "staminaPotionL",
    "stats": {
      "id": "6",
      "itemType": "consumable",
      "name": "Potion d'énergie majeure",
      "stats": 50,
      "buffTarget": "stamina",
      "dropRate": ".3"
    }
  },
  // -------------------------- BUFFS --------------------------
  {
    "name": "strengthPotionS",
    "stats": {
      "id": "7",
      "itemType": "consumable",
      "name": "Potion de force mineure",
      "stats": 1,
      "buffTarget": "strength",
      "time": "1",
      "dropRate": ".3"
    }
  },
  {
    "name": "strengthPotionM",
    "stats": {
      "id": "8",
      "itemType": "consumable",
      "name": "Potion de force",
      "stats": 1,
      "buffTarget": "strength",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "strengthPotionL",
    "stats": {
      "id": "9",
      "itemType": "consumable",
      "name": "Potion de force majeure",
      "stats": 2,
      "buffTarget": "strength",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "endurancePotionS",
    "stats": {
      "id": "10",
      "itemType": "consumable",
      "name": "Potion d'endurance mineure",
      "stats": 1,
      "buffTarget": "endurance",
      "time": "1",
      "dropRate": ".3"
    }
  },
  {
    "name": "endurancePotionM",
    "stats": {
      "id": "11",
      "itemType": "consumable",
      "name": "Potion d'endurance",
      "stats": 1,
      "buffTarget": "endurance",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "endurancePotionL",
    "stats": {
      "id": "12",
      "itemType": "consumable",
      "name": "Potion d'endurance majeure",
      "stats": 2,
      "buffTarget": "endurance",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "constitutionPotionS",
    "stats": {
      "id": "13",
      "itemType": "consumable",
      "name": "Potion de constitution mineure",
      "stats": 1,
      "buffTarget": "constitution",
      "time": "1",
      "dropRate": ".3"
    }
  },
  {
    "name": "constitutionPotionM",
    "stats": {
      "id": "14",
      "itemType": "consumable",
      "name": "Potion de constitution",
      "stats": 1,
      "buffTarget": "constitution",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "constitutionPotionL",
    "stats": {
      "id": "15",
      "itemType": "consumable",
      "name": "Potion de constitution majeure",
      "stats": 2,
      "buffTarget": "constitution",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "dexterityPotionS",
    "stats": {
      "id": "16",
      "itemType": "consumable",
      "name": "Potion de dextérité mineure",
      "stats": 1,
      "buffTarget": "dexterity",
      "time": "1",
      "dropRate": ".3"
    }
  },
  {
    "name": "dexterityPotionM",
    "stats": {
      "id": "17",
      "itemType": "consumable",
      "name": "Potion de dextérité",
      "stats": 1,
      "buffTarget": "dexterity",
      "time": "3",
      "dropRate": ".3"
    }
  },
  {
    "name": "dexterityPotionL",
    "stats": {
      "id": "18",
      "itemType": "consumable",
      "name": "Potion de dextérité majeure",
      "stats": 2,
      "buffTarget": "dexterity",
      "time": "3",
      "dropRate": ".3"
    }
  },
  // -------------------------- RUNES --------------------------
  {
    "name": "strengthRune",
    "stats": {
      "id": "19",
      "itemType": "equipment",
      "name": "Rune de puissance",
      "stats": 5,
      "type": 2,
      "dropRate": ".1",
      "buffTarget": "strength"
    }
  },
  {
    "name": "enduranceRune",
    "stats": {
      "id": "20",
      "itemType": "equipment",
      "name": "Rune de ténacité",
      "stats": 5,
      "type": 2,
      "dropRate": ".1",
      "buffTarget": "endurance"
    }
  },
  {
    "name": "constitutionRune",
    "stats": {
      "id": "21",
      "itemType": "equipment",
      "name": "Rune de longévité",
      "stats": 5,
      "type": 2,
      "dropRate": ".1",
      "buffTarget": "constitution"
    }
  },
  {
    "name": "dexterityRune",
    "stats": {
      "id": "22",
      "itemType": "equipment",
      "name": "Rune de vivacité",
      "stats": 5,
      "type": 2,
      "dropRate": ".1",
      "buffTarget": "dexterity"
    }
  },
  // -------------------------- ARMES --------------------------
  {
    "name": "rustedDagger",
    "stats": {
      "id": "23",
      "itemType": "equipment",
      "name": "Dague rouillée",
      "stats": 10,
      "type": 0,
      "dropRate": ".1"
    }
  },
  {
    "name": "ironBroadsword",
    "stats": {
      "id": "24",
      "itemType": "equipment",
      "name": "Glaive en fer",
      "stats": 20,
      "type": 0,
      "dropRate": ".1"
    }
  },
  {
    "name": "steelClaymore",
    "stats": {
      "id": "25",
      "itemType": "equipment",
      "name": "Claymore en acier",
      "stats": 40,
      "type": 0,
      "dropRate": ".1"
    }
  },
  {
    "name": "almace",
    "stats": {
      "id": "26",
      "itemType": "equipment",
      "name": "Almace, l'épée légendaire",
      "stats": 70,
      "type": 0,
      "dropRate": ".1"
    }
  },
  // -------------------------- ARMURES --------------------------
  {
    "name": "adventurerHelmet",
    "stats": {
      "id": "27",
      "itemType": "equipment",
      "name": "Casque d'aventurier",
      "stats": 10,
      "type": 1,
      "dropRate": ".1"
    }
  },
  {
    "name": "knightPad",
    "stats": {
      "id": "28",
      "itemType": "equipment",
      "name": "Jambières de chevalier",
      "stats": 10,
      "type": 1,
      "dropRate": ".1"
    }
  },
  {
    "name": "steelShield",
    "stats": {
      "id": "29",
      "itemType": "equipment",
      "name": "Bouclier en acier",
      "stats": 20,
      "type": 1,
      "dropRate": ".1"
    }
  },
  {
    "name": "draconicArmor",
    "stats": {
      "id": "30",
      "itemType": "equipment",
      "name": "Armure draconique",
      "stats": 30,
      "type": 1,
      "dropRate": ".1"
    }
  },
]
