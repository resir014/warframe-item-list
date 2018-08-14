const { WEAPON_MELEE } = require('../constants.js').ITEM_TYPE;
const {
  ENEMY,
  FACTION_REWARD,
  LOCATION,
  QUEST,
  REWARD,
  UNOBTAINABLE,
  VAULTED,
} = require('../constants.js').ACQUISITION;
const {
  BLADE_WHIP,
  CLAWS,
  DAGGER,
  DUAL_DAGGERS,
  DUAL_SWORDS,
  FIST,
  GLAIVE,
  GUNBLADE,
  HAMMER,
  HEAVY_BLADE,
  HYBRID,
  MACHETE,
  NIKANA,
  NUNCHAKU,
  POLEARM,
  RAPIER,
  SCYTHE,
  SPARRING,
  STAFF,
  SWORD,
  SWORD_SHEILD,
  TONFA,
  WARFANS,
  WHIP,
} = require('../constants.js').MELEE_CATEGORIES;

const {
  STALKER,
  VOR,
} = ENEMY;
const {
  ARBITERS_OF_HEXIS,
  CEPHALON_SUDA,
  NEW_LOKA,
  RED_VEIL,
  STEEL_MERIDIAN,
  THE_PERRIN_SEQUENCE,
} = FACTION_REWARD;
const {
  BARO_KITEER,
  DOJO_BIO_LAB,
  DOJO_CHEM_LAB,
  DOJO_ENERGY_LAB,
  DOJO_TENNO_LAB,
  MARKET,
} = LOCATION;
const {
  THE_SECOND_DREAM,
  THE_WAR_WITHIN,
  THE_SACRIFICE,
} = QUEST;
const {
  ALERTS,
  ANNIVERSARY,
  CETUS_BOUNTY_40_60,
  LOGIN_REWARD,
  OPERATION_PLAGUE_STAR,
  RELICS,
} = REWARD;

const weaponMelees = [
  {
    name: 'Broken War',
    acquisition: THE_SECOND_DREAM,
    category: SWORD,
    masteryRank: 10,
  },
  {
    name: 'Cronus',
    acquisition: VOR,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Dakra Prime',
    acquisition: VAULTED,
    category: SWORD,
    masteryRank: 6,
  },
  {
    name: 'Dark Sword',
    acquisition: ALERTS,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Ether Sword',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Heat Sword',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Jaw Sword',
    acquisition: ALERTS,
    category: SWORD,
    masteryRank: 1,
  },
  {
    name: 'Krohkur',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 5,
  },
  {
    name: 'Mire',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Pangolin Sword',
    acquisition: ALERTS,
    category: SWORD,
    masteryRank: 2,
  },
  {
    name: 'Plasma Sword',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Skana',
    acquisition: MARKET,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Skana Prime',
    acquisition: UNOBTAINABLE,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Skiajati',
    acquisition: THE_SACRIFICE,
    category: NIKANA,
    masteryRank: 11,
  },
  {
    name: 'Prisma Skana',
    acquisition: BARO_KITEER,
    category: SWORD,
    masteryRank: 0,
  },
  {
    name: 'Dex Dakra',
    acquisition: ANNIVERSARY,
    category: DUAL_SWORDS,
    masteryRank: 0,
  },
  {
    name: 'Dual Cleavers',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 3,
  },
  {
    name: 'Prisma Dual Cleavers',
    acquisition: BARO_KITEER,
    category: DUAL_SWORDS,
    masteryRank: 3,
  },
  {
    name: 'Dual Ether',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 0,
  },
  {
    name: 'Dual Heat Swords',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 0,
  },
  {
    name: 'Dual Keres',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 7,
  },
  {
    name: 'Twin Krohkur',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 6,
  },
  {
    name: 'Dual Ichor',
    acquisition: DOJO_BIO_LAB,
    category: DUAL_SWORDS,
    masteryRank: 6,
  },
  {
    name: 'Dual Kamas',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 1,
  },
  {
    name: 'Dual Kamas Prime',
    acquisition: VAULTED,
    category: DUAL_SWORDS,
    masteryRank: 6,
  },
  {
    name: 'Dual Raza',
    acquisition: DOJO_TENNO_LAB,
    category: DUAL_SWORDS,
    masteryRank: 6,
  },
  {
    name: 'Dual Skana',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 0,
  },
  {
    name: 'Dual Zoren',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 2,
  },
  {
    name: 'Nami Skyla',
    acquisition: DOJO_TENNO_LAB,
    category: DUAL_SWORDS,
    masteryRank: 0,
  },
  {
    name: 'Nami Skyla Prime',
    acquisition: RELICS,
    category: DUAL_SWORDS,
    masteryRank: 11,
  },
  {
    name: 'Twin Basolk',
    acquisition: MARKET,
    category: DUAL_SWORDS,
    masteryRank: 3,
  },
  {
    name: 'Ceramic Dagger',
    acquisition: MARKET,
    category: DAGGER,
    masteryRank: 3,
  },
  {
    name: 'Dark Dagger',
    acquisition: ALERTS,
    category: DAGGER,
    masteryRank: 0,
  },
  {
    name: 'Rakta Dark Dagger',
    acquisition: RED_VEIL,
    category: DAGGER,
    masteryRank: 8,
  },
  {
    name: 'Heat Dagger',
    acquisition: MARKET,
    category: DAGGER,
    masteryRank: 0,
  },
  {
    name: 'Karyst',
    acquisition: MARKET,
    category: DAGGER,
    masteryRank: 0,
  },
  {
    name: 'Sheev',
    acquisition: MARKET,
    category: DAGGER,
    masteryRank: 0,
  },
  {
    name: 'Kama',
    acquisition: MARKET,
    category: MACHETE,
    masteryRank: 1,
  },
  {
    name: 'Gazal Machete',
    acquisition: DOJO_TENNO_LAB,
    category: MACHETE,
    masteryRank: 5,
  },
  {
    name: 'Machete',
    acquisition: LOGIN_REWARD,
    category: MACHETE,
    masteryRank: 1,
  },
  {
    name: 'Machete Wraith',
    acquisition: BARO_KITEER,
    category: MACHETE,
    masteryRank: 1,
  },
  {
    name: 'Nami Solo',
    acquisition: MARKET,
    category: MACHETE,
    masteryRank: 0,
  },
  {
    name: 'Prova',
    acquisition: DOJO_ENERGY_LAB,
    category: MACHETE,
    masteryRank: 3,
  },
  {
    name: 'Prova Vandal',
    acquisition: BARO_KITEER,
    category: MACHETE,
    masteryRank: 0,
  },
  {
    name: 'Ether Daggers',
    acquisition: OPERATION_PLAGUE_STAR,
    category: DUAL_DAGGERS,
    masteryRank: 0,
  },
  {
    name: 'Fang',
    acquisition: MARKET,
    category: DUAL_DAGGERS,
    masteryRank: 0,
  },
  {
    name: 'Fang Prime',
    acquisition: RELICS,
    category: DUAL_DAGGERS,
    masteryRank: 0,
  },
  {
    name: 'Okina',
    acquisition: DOJO_TENNO_LAB,
    category: DUAL_DAGGERS,
    masteryRank: 5,
  },
  {
    name: 'Ankyros',
    acquisition: MARKET,
    category: FIST,
    masteryRank: 0,
  },
  {
    name: 'Ankyros Prime',
    acquisition: RELICS,
    category: FIST,
    masteryRank: 0,
  },
  {
    name: 'Furax',
    acquisition: MARKET,
    category: FIST,
    masteryRank: 0,
  },
  {
    name: 'MK1-Furax',
    acquisition: MARKET,
    category: FIST,
    masteryRank: 0,
  },
  {
    name: 'Furax Wraith',
    acquisition: CETUS_BOUNTY_40_60,
    category: FIST,
    masteryRank: 0,
  },
  {
    name: 'Tekko',
    acquisition: MARKET,
    category: FIST,
    masteryRank: 2,
  },
  {
    name: 'Ack & Brunt',
    acquisition: DOJO_CHEM_LAB,
    category: SWORD_SHEILD,
    masteryRank: 3,
  },
  {
    name: 'Sigma & Octantis',
    acquisition: LOGIN_REWARD,
    category: SWORD_SHEILD,
    masteryRank: 0,
  },
  {
    name: 'Silva & Aegis',
    acquisition: DOJO_TENNO_LAB,
    category: SWORD_SHEILD,
    masteryRank: 0,
  },
  {
    name: 'Silva & Aegis Prime',
    acquisition: RELICS,
    category: SWORD_SHEILD,
    masteryRank: 12,
  },
  {
    name: 'Hirudo',
    acquisition: MARKET,
    category: SPARRING,
    masteryRank: 7,
  },
  {
    name: 'Kogake',
    acquisition: MARKET,
    category: SPARRING,
    masteryRank: 0,
  },
  {
    name: 'Kogake Prime',
    acquisition: RELICS,
    category: SPARRING,
    masteryRank: 10,
  },
  {
    name: 'Obex',
    acquisition: MARKET,
    category: SPARRING,
    masteryRank: 0,
  },
  {
    name: 'Prisma Obex',
    acquisition: BARO_KITEER,
    category: SPARRING,
    masteryRank: 0,
  },
  {
    name: 'Cassowar',
    acquisition: DOJO_TENNO_LAB,
    category: POLEARM,
    masteryRank: 5,
  },
  {
    name: 'Guandao',
    acquisition: DOJO_TENNO_LAB,
    category: POLEARM,
    masteryRank: 4,
  },
  {
    name: 'Kesheg',
    acquisition: DOJO_CHEM_LAB,
    category: POLEARM,
    masteryRank: 7,
  },
  {
    name: 'Lesion',
    acquisition: MARKET,
    category: POLEARM,
    masteryRank: 7,
  },
  {
    name: 'Orthos',
    acquisition: MARKET,
    category: POLEARM,
    masteryRank: 2,
  },
  {
    name: 'Orthos Prime',
    acquisition: RELICS,
    category: POLEARM,
    masteryRank: 2,
  },
  {
    name: 'Serro',
    acquisition: DOJO_ENERGY_LAB,
    category: POLEARM,
    masteryRank: 2,
  },
  {
    name: 'Sydon',
    acquisition: DOJO_CHEM_LAB,
    category: POLEARM,
    masteryRank: 2,
  },
  {
    name: 'Vaykor Sydon',
    acquisition: STEEL_MERIDIAN,
    category: POLEARM,
    masteryRank: 8,
  },
  {
    name: 'Tonbo',
    acquisition: DOJO_TENNO_LAB,
    category: POLEARM,
    masteryRank: 3,
  },
  {
    name: 'Amphis',
    acquisition: MARKET,
    category: STAFF,
    masteryRank: 0,
  },
  {
    name: 'Bo',
    acquisition: MARKET,
    category: STAFF,
    masteryRank: 0,
  },
  {
    name: 'MK1-Bo',
    acquisition: MARKET,
    category: STAFF,
    masteryRank: 0,
  },
  {
    name: 'Bo Prime',
    acquisition: VAULTED,
    category: STAFF,
    masteryRank: 5,
  },
  {
    name: 'Broken Scepter',
    acquisition: THE_WAR_WITHIN,
    category: STAFF,
    masteryRank: 5,
  },
  {
    name: 'Tipedo',
    acquisition: MARKET,
    category: STAFF,
    masteryRank: 3,
  },
  {
    name: 'Cerata',
    acquisition: DOJO_BIO_LAB,
    category: GLAIVE,
    masteryRank: 3,
  },
  {
    name: 'Glaive',
    acquisition: MARKET,
    category: GLAIVE,
    masteryRank: 1,
  },
  {
    name: 'Glaive Prime',
    acquisition: RELICS,
    category: VAULTED,
    masteryRank: 10,
  },
  {
    name: 'Halikar',
    acquisition: MARKET,
    category: GLAIVE,
    masteryRank: 7,
  },
  {
    name: 'Kestrel',
    acquisition: MARKET,
    category: GLAIVE,
    masteryRank: 0,
  },
  {
    name: 'Orvius',
    acquisition: THE_WAR_WITHIN,
    category: GLAIVE,
    masteryRank: 6,
  },
  {
    name: 'Atterax',
    acquisition: MARKET,
    category: WHIP,
    masteryRank: 2,
  },
  {
    name: 'Lecta',
    acquisition: MARKET,
    category: WHIP,
    masteryRank: 0,
  },
  {
    name: 'Secura Lecta',
    acquisition: THE_PERRIN_SEQUENCE,
    category: WHIP,
    masteryRank: 8,
  },
  {
    name: 'Scoliac',
    acquisition: DOJO_BIO_LAB,
    category: WHIP,
    masteryRank: 6,
  },
  {
    name: 'Galatine',
    acquisition: MARKET,
    category: HEAVY_BLADE,
    masteryRank: 3,
  },
  {
    name: 'Galatine Prime',
    acquisition: RELICS,
    category: HEAVY_BLADE,
    masteryRank: 13,
  },
  {
    name: 'Gram',
    acquisition: MARKET,
    category: HEAVY_BLADE,
    masteryRank: 2,
  },
  {
    name: 'Scindo',
    acquisition: MARKET,
    category: HEAVY_BLADE,
    masteryRank: 2,
  },
  {
    name: 'Scindo Prime',
    acquisition: RELICS,
    category: HEAVY_BLADE,
    masteryRank: 4,
  },
  {
    name: 'War',
    acquisition: THE_SECOND_DREAM,
    category: HEAVY_BLADE,
    masteryRank: 10,
  },
  {
    name: 'Zenistar',
    acquisition: LOGIN_REWARD,
    category: HEAVY_BLADE,
    masteryRank: 6,
  },
  {
    name: 'Arca Titron',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 10,
  },
  {
    name: 'Fragor',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 2,
  },
  {
    name: 'Fragor Prime',
    acquisition: VAULTED,
    category: HAMMER,
    masteryRank: 7,
  },
  {
    name: 'Heliocor',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 9,
  },
  {
    name: 'Synoid Heliocor',
    acquisition: CEPHALON_SUDA,
    category: HAMMER,
    masteryRank: 8,
  },
  {
    name: 'Jat Kittag',
    acquisition: DOJO_CHEM_LAB,
    category: HAMMER,
    masteryRank: 5,
  },
  {
    name: 'Magistar',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 1,
  },
  {
    name: 'Sancti Magistar',
    acquisition: NEW_LOKA,
    category: HAMMER,
    masteryRank: 8,
  },
  {
    name: 'Sibear',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 6,
  },
  {
    name: 'Volnus',
    acquisition: MARKET,
    category: HAMMER,
    masteryRank: 4,
  },
  {
    name: 'Nikana',
    acquisition: DOJO_TENNO_LAB,
    category: NIKANA,
    masteryRank: 4,
  },
  {
    name: 'Dragon Nikana',
    acquisition: MARKET,
    category: NIKANA,
    masteryRank: 8,
  },
  {
    name: 'Nikana Prime',
    acquisition: VAULTED,
    category: NIKANA,
    masteryRank: 0,
  },
  {
    name: 'Ripkas',
    acquisition: MARKET,
    category: CLAWS,
    masteryRank: 3,
  },
  {
    name: 'Venka',
    acquisition: DOJO_TENNO_LAB,
    category: CLAWS,
    masteryRank: 3,
  },
  {
    name: 'Venka Prime',
    acquisition: RELICS,
    category: CLAWS,
    masteryRank: 8,
  },
  {
    name: 'Anku',
    acquisition: DOJO_TENNO_LAB,
    category: SCYTHE,
    masteryRank: 3,
  },
  {
    name: 'Caustacyst',
    acquisition: DOJO_BIO_LAB,
    category: SCYTHE,
    masteryRank: 7,
  },
  {
    name: 'Ether Reaper',
    acquisition: MARKET,
    category: SCYTHE,
    masteryRank: 3,
  },
  {
    name: 'Hate',
    acquisition: STALKER,
    category: SCYTHE,
    masteryRank: 2,
  },
  {
    name: 'Reaper Prime',
    acquisition: VAULTED,
    category: SCYTHE,
    masteryRank: 2,
  },
  {
    name: 'Boltace',
    acquisition: MARKET,
    category: TONFA,
    masteryRank: 2,
  },
  {
    name: 'Telos Boltace',
    acquisition: ARBITERS_OF_HEXIS,
    category: TONFA,
    masteryRank: 8,
  },
  {
    name: 'Kronen',
    acquisition: MARKET,
    category: TONFA,
    masteryRank: 3,
  },
  {
    name: 'Kronen Prime',
    acquisition: RELICS,
    category: TONFA,
    masteryRank: 8,
  },
  {
    name: 'Ohma',
    acquisition: MARKET,
    category: TONFA,
    masteryRank: 8,
  },
  {
    name: 'Redeemer',
    acquisition: MARKET,
    category: GUNBLADE,
    masteryRank: 4,
  },
  {
    name: 'Sarpa',
    acquisition: MARKET,
    category: GUNBLADE,
    masteryRank: 8,
  },
  {
    name: 'Ninkondi',
    acquisition: MARKET,
    category: NUNCHAKU,
    masteryRank: 0,
  },
  {
    name: 'Shaku',
    acquisition: DOJO_TENNO_LAB,
    category: NUNCHAKU,
    masteryRank: 0,
  },
  {
    name: 'Jat Kusar',
    acquisition: DOJO_CHEM_LAB,
    category: BLADE_WHIP,
    masteryRank: 10,
  },
  {
    name: 'Lacera',
    acquisition: DOJO_TENNO_LAB,
    category: BLADE_WHIP,
    masteryRank: 7,
  },
  {
    name: 'Mios',
    acquisition: DOJO_BIO_LAB,
    category: BLADE_WHIP,
    masteryRank: 8,
  },
  {
    name: 'Dark Split-Sword',
    acquisition: DOJO_TENNO_LAB,
    category: HYBRID,
    masteryRank: 5,
  },
  {
    name: 'Destreza',
    acquisition: MARKET,
    category: RAPIER,
    masteryRank: 7,
  },
  {
    name: 'Destreza Prime',
    acquisition: RELICS,
    category: RAPIER,
    masteryRank: 10,
  },
  {
    name: 'Endura',
    acquisition: DOJO_TENNO_LAB,
    category: RAPIER,
    masteryRank: 7,
  },
  {
    name: 'Gunsen',
    acquisition: DOJO_TENNO_LAB,
    category: WARFANS,
    masteryRank: 10,
  },
];

module.exports = weaponMelees.map(object => ({ ...object, type: WEAPON_MELEE }));
