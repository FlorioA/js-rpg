export default [
  // -------------------------- 1er PALIER --------------------------
  {
    "id": 1,
    "name": "Un pigeon",
    "strength": [9, 12],
    "endurance": [9, 12],
    "constitution": [9, 12],
    "dexterity": [9, 12],
    "items": [
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
      },
    ],
    "expGain": 100
  },
  {
    "id": 2,
    "name": "Loup blessé",
    "strength": [9, 12],
    "endurance": [9, 12],
    "constitution": [9, 12],
    "dexterity": [9, 12],
    "items": [
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
      },
    ],
    "expGain": 100
  },
  {
    "id": 3,
    "name": "Blob",
    "strength": [9, 12],
    "endurance": [9, 12],
    "constitution": [9, 12],
    "dexterity": [9, 12],
    "items": [
      {
        "name": "healthPotionM",
        "stats": {
          "id": "2",
          "itemType": "consumable",
          "name": "Potion de soin",
          "stats": 120,
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
    ],
    "expGain": 150
  },
  {
    "id": 4,
    "name": "Écureuil possédé",
    "strength": [9, 12],
    "endurance": [9, 12],
    "constitution": [9, 12],
    "dexterity": [9, 12],
    "items": [
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
    ],
    "expGain": 150
  },
  {
    "id": 5,
    "name": "Humain qui se ballade",
   "strength": [10, 13],
    "endurance": [10, 13],
    "constitution": [10, 13],
    "dexterity": [10, 13],
    "items": [
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
    ],
    "expGain": 200
  },
  {
    "id": 6,
    "name": "Crocodile malodorant",
   "strength": [10, 13],
    "endurance": [10, 13],
    "constitution": [10, 13],
    "dexterity": [10, 13],
    "items": [
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
    ],
    "expGain": 200
  },
  {
    "id": 7,
    "name": "Enfant ninja",
   "strength": [10, 13],
    "endurance": [10, 13],
    "constitution": [10, 13],
    "dexterity": [10, 13],
    "items": [
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
    ],
    "expGain": 200
  },
  {
    "id": 8,
    "name": "Un tavernier",
   "strength": [10, 13],
    "endurance": [10, 13],
    "constitution": [10, 13],
    "dexterity": [10, 13],
    "items": [
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
    ],
    "expGain": 250
  },
  // -------------------------- 1er BOSS --------------------------
  {
    "id": 9,
    "name": "Apalala, dragon des fleuves",
    "strength": [15, 15],
    "endurance": [15, 15],
    "constitution": [15, 15],
    "dexterity": [15, 15],
    "items": [
      {
        "name": "healthPotionM",
        "stats": {
          "id": "2",
          "itemType": "consumable",
          "name": "Potion de soin",
          "stats": 120,
          "buffTarget": "hp",
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
    ],
    "expGain": 350
  },
  // -------------------------- 2ème PALIER --------------------------
  {
    "id": 10,
    "name": "Spectre de la forêt",
    "strength": [13, 16],
    "endurance": [13, 16],
    "constitution": [13, 16],
    "dexterity": [13, 16],
    "items": [
      {
        "name": "healthPotionM",
        "stats": {
          "id": "2",
          "itemType": "consumable",
          "name": "Potion de soin",
          "stats": 120,
          "buffTarget": "hp",
          "dropRate": ".3"
          }
      },
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
    ],
    "expGain": 250
  },
  {
    "id": 11,
    "name": "Lutin sylvain",
    "strength": [13, 16],
    "endurance": [13, 16],
    "constitution": [13, 16],
    "dexterity": [13, 16],
    "items": [
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
    ],
    "expGain": 250
  },
  {
    "id": 12,
    "name": "Sanglier ensanglanté",
    "strength": [13, 16],
    "endurance": [13, 16],
    "constitution": [13, 16],
    "dexterity": [13, 16],
    "items": [
      {
        "name": "healthPotionM",
        "stats": {
          "id": "2",
          "itemType": "consumable",
          "name": "Potion de soin",
          "stats": 120,
          "buffTarget": "hp",
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
    ],
    "expGain": 300
  },
  {
    "id": 13,
    "name": "Shere Khan le tigre",
    "strength": [13, 16],
    "endurance": [13, 16],
    "constitution": [13, 16],
    "dexterity": [13, 16],
    "items": [
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
    ],
    "expGain": 300
  },
  {
    "id": 14,
    "name": "Shaman satanique",
    "strength": [14, 17],
    "endurance": [14, 17],
    "constitution": [14, 17],
    "dexterity": [14, 17],
    "items": [
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
    ],
    "expGain": 350
  },
  {
    "id": 15,
    "name": "Satan shamanique",
    "strength": [14, 17],
    "endurance": [14, 17],
    "constitution": [14, 17],
    "dexterity": [14, 17],
    "items": [
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
    ],
    "expGain": 350
  },
  {
    "id": 16,
    "name": "Shaman shamanique",
    "strength": [14, 17],
    "endurance": [14, 17],
    "constitution": [14, 17],
    "dexterity": [14, 17],
    "items": [
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
    ],
    "expGain": 350
  },
  {
    "id": 17,
    "name": "Satan satanique",
    "strength": [14, 17],
    "endurance": [14, 17],
    "constitution": [14, 17],
    "dexterity": [14, 17],
    "items": [
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
    ],
    "expGain": 400
  },
  // -------------------------- 2ème BOSS --------------------------
  {
    "id": 18,
    "name": "Zmeï, dragon des forêts",
    "strength": [20, 20],
    "endurance": [20, 20],
    "constitution": [20, 20],
    "dexterity": [20, 20],
    "items": [
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
    ],
    "expGain": 600
  },
  // -------------------------- 3ème PALIER --------------------------
  {
    "id": 19,
    "name": "Nain tendu",
    "strength": [17, 20],
    "endurance": [17, 20],
    "constitution": [17, 20],
    "dexterity": [17, 20],
    "items": [
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
    ],
    "expGain": 500
  },
  {
    "id": 20,
    "name": "un CRS flouté",
    "strength": [17, 20],
    "endurance": [17, 20],
    "constitution": [17, 20],
    "dexterity": [17, 20],
    "items": [
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
    ],
    "expGain": 500
  },
  {
    "id": 21,
    "name": "Taupe géante",
    "strength": [17, 20],
    "endurance": [17, 20],
    "constitution": [17, 20],
    "dexterity": [17, 20],
    "items": [
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
    ],
    "expGain": 550
  },
  {
    "id": 22,
    "name": "Mage noir",
    "strength": [17, 20],
    "endurance": [17, 20],
    "constitution": [17, 20],
    "dexterity": [17, 20],
    "items": [
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
    ],
    "expGain": 550
  },
  {
    "id": 23,
    "name": "Ver des montagnes",
    "strength": [18, 21],
    "endurance": [18, 21],
    "constitution": [18, 21],
    "dexterity": [18, 21],
    "items": [
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
    ],
    "expGain": 600
  },
  {
    "id": 24,
    "name": "Ogre",
    "strength": [18, 21],
    "endurance": [18, 21],
    "constitution": [18, 21],
    "dexterity": [18, 21],
    "items": [
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
    ],
    "expGain": 600
  },
  {
    "id": 25,
    "name": "Gobelin qui pousse à la salle",
    "strength": [18, 21],
    "endurance": [18, 21],
    "constitution": [18, 21],
    "dexterity": [18, 21],
    "items": [
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
    ],
    "expGain": 600
  },
  {
    "id": 26,
    "name": "Guerrier orc",
    "strength": [18, 21],
    "endurance": [18, 21],
    "constitution": [18, 21],
    "dexterity": [18, 21],
    "items": [
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
    ],
    "expGain": 650
  },
  // -------------------------- 3ème BOSS --------------------------
  {
    "id": 27,
    "name": "Fafnir, dragon des montagnes",
    "strength": [25, 25],
    "endurance": [25, 25],
    "constitution": [25, 25],
    "dexterity": [25, 25],
    "items": [
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
    ],
    "expGain": 800
  },
  // -------------------------- 4ème PALIER --------------------------
  {
    "id": 28,
    "name": "Nécromant mal rasé",
    "strength": [21, 24],
    "endurance": [21, 24],
    "constitution": [21, 24],
    "dexterity": [21, 24],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 29,
    "name": "Démon des cataclysmes",
    "strength": [21, 24],
    "endurance": [21, 24],
    "constitution": [21, 24],
    "dexterity": [21, 24],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 30,
    "name": "Élémentaire d'air",
    "strength": [21, 24],
    "endurance": [21, 24],
    "constitution": [21, 24],
    "dexterity": [21, 24],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 31,
    "name": "Démoniste lvl 60",
    "strength": [21, 24],
    "endurance": [21, 24],
    "constitution": [21, 24],
    "dexterity": [21, 24],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 32,
    "name": "Roi Gobelin",
    "strength": [22, 25],
    "endurance": [22, 25],
    "constitution": [22, 25],
    "dexterity": [22, 25],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 33,
    "name": "Roi Orc",
    "strength": [22, 25],
    "endurance": [22, 25],
    "constitution": [22, 25],
    "dexterity": [22, 25],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 34,
    "name": "Roi Dadidou",
    "strength": [22, 25],
    "endurance": [22, 25],
    "constitution": [22, 25],
    "dexterity": [22, 25],
    "items": [
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
    ],
    "expGain": 900
  },
  {
    "id": 35,
    "name": "Adrien Florio",
    "strength": [22, 25],
    "endurance": [22, 25],
    "constitution": [22, 25],
    "dexterity": [22, 25],
    "items": [
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
    ],
    "expGain": 900
  },
  // -------------------------- 4ème BOSS --------------------------
  {
    "id": 36,
    "name": "Balaur, dragon des foudres",
    "strength": [30, 30],
    "endurance": [30, 30],
    "constitution": [30, 30],
    "dexterity": [30, 30],
    "items": [
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
    ],
    "expGain": 2000
  },
]