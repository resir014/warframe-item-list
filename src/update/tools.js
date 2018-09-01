// const EXALTED = 'Exalted';

const BLADE_WHIP = 'Blade-Whip';
const CLAWS = 'Claws';
const DAGGER = 'Dagger';
const DUAL_DAGGERS = 'Dual Daggers';
const DUAL_SWORDS = 'Dual Swords';
const FIST = 'Fist';
const GLAIVE = 'Glaive';
const GUNBLADE = 'Gunblade';
const HAMMER = 'Hammer';
const HEAVY_BLADE = 'Heavy Blade';
const MACHETE = 'Machete';
const NIKANA = 'Nikana';
const NUNCHAKU = 'Nunchaku';
const POLEARM = 'Polearm';
const RAPIER = 'Rapier';
const SCYTHE = 'Scythe';
const SPARRING = 'Sparring';
const STAFF = 'Staff';
const SWORD = 'Sword';
const SWORD_SHEILD = 'Sword-Shield';
const TONFA = 'Tonfa';
const WARFAN = 'Warfan';
const WHIP = 'Whip';

const Melee = {
  [SWORD]: [
    'Broken War',
    'Cronus',
    'Dakra Prime',
    'Dark Sword',
    'Ether Sword',
    'Heat Sword',
    'Jaw Sword',
    'Krohkur',
    'Mire',
    'Pangolin Sword',
    'Plasma Sword',
    'Skana',
    'Skana Prime',
    'Prisma Skana',
  ],
  [DUAL_SWORDS]: [
    'Dark Split-Sword',
    'Dex Dakra',
    'Dual Cleavers',
    'Prisma Dual Cleavers',
    'Dual Ether',
    'Dual Heat Swords',
    'Dual Ichor',
    'Dual Kamas',
    'Dual Kamas Prime',
    'Dual Keres',
    'Dual Raza',
    'Dual Skana',
    'Dual Zoren',
    'Nami Skyla',
    'Nami Skyla Prime',
    'Twin Basolk',
    'Twin Krohkur',
  ],
  [SWORD_SHEILD]: [
    'Ack & Brunt',
    'Sigma & Octantis',
    'Silva & Aegis',
    'Silva & Aegis Prime',
  ],
  [MACHETE]: [
    'Kama',
    'Gazal Machete',
    'Machete',
    'Prisma Machete',
    'Machete Wraith',
    'Nami Solo',
    'Prova',
    'Prova Vandal',
  ],
  [NIKANA]: [
    'Nikana',
    'Dragon Nikana',
    'Nikana Prime',
    'Skiajati',
  ],
  [RAPIER]: [
    'Destreza',
    'Destreza Prime',
    'Endura',
  ],
  [BLADE_WHIP]: [
    'Jat Kusar',
    'Lacera',
    'Mios',
  ],
  [GUNBLADE]: [
    'Redeemer',
    'Sarpa',
  ],
  [WARFAN]: [
    'Gunsen',
  ],
  [DAGGER]: [
    'Ceramic Dagger',
    'Dark Dagger',
    'Rakta Dark Dagger',
    'Heat Dagger',
    'Karyst',
    'Sheev',
  ],
  [DUAL_DAGGERS]: [
    'Ether Daggers',
    'Fang',
    'Fang Prime',
    'Okina',
  ],
  [FIST]: [
    'Ankyros',
    'Ankyros Prime',
    'Furax',
    'MK1-Furax',
    'Furax Wraith',
    'Tekko',
  ],
  [SPARRING]: [
    'Hirudo',
    'Kogake',
    'Kogake Prime',
    'Obex',
    'Prisma Obex',
  ],
  [CLAWS]: [
    'Ripkas',
    'Venka',
    'Venka Prime',
  ],
  [POLEARM]: [
    'Cassowar',
    'Guandao',
    'Kesheg',
    'Lesion',
    'Orthos',
    'Orthos Prime',
    'Serro',
    'Sydon',
    'Vaykor Sydon',
    'Tonbo',
  ],
  [STAFF]: [
    'Amphis',
    // Only avaliable in Warframe China
    // 'Cadus',
    'Bo',
    'MK1-Bo',
    'Bo Prime',
    'Broken Scepter',
    'Tipedo',
  ],
  [SCYTHE]: [
    'Anku',
    'Caustacyst',
    'Ether Reaper',
    'Hate',
    'Reaper Prime',
  ],
  [HEAVY_BLADE]: [
    'Dark Split-Sword',
    'Galatine',
    'Galatine Prime',
    'Gram',
    'Scindo',
    'Scindo Prime',
    'War',
    'Zenistar',
  ],
  [HAMMER]: [
    'Arca Titron',
    'Fragor',
    'Fragor Prime',
    'Heliocor',
    'Synoid Heliocor',
    'Jat Kittag',
    'Magistar',
    'Sancti Magistar',
    'Sibear',
    'Volnus',
  ],
  [GLAIVE]: [
    'Cerata',
    'Glaive',
    'Glaive Prime',
    'Halikar',
    'Kestrel',
    'Orvius',
  ],
  [TONFA]: [
    'Boltace',
    'Telos Boltace',
    'Kronen',
    'Kronen Prime',
    'Ohma',
  ],
  [WHIP]: [
    'Atterax',
    'Lecta',
    'Secura Lecta',
    'Scoliac',
  ],
  [NUNCHAKU]: [
    'Ninkondi',
    'Shaku',
  ],
  // Exalted items do not provide mastery rank, but we'll keep them here to avoid confusion.
  // [EXALTED]: [
  //   'Diwata',
  //   'Exalted Blade',
  //   'Iron Staff',
  //   'Valkyr Talons',
  // ],
};

const RIFLE = 'Rifle';
const CONTINUOUS_RIFLE = 'Continuous Rifle';
const SPEARGUN_RIFLE = 'Speargun Rifle';
const SHOTGUN = 'Shotgun';
const SNIPER = 'Sniper';
const BOW = 'Bow';
const LAUNCHER = 'Launcher';

const Primary = {
  [RIFLE]: [
    'Argonak',
    'Baza',
    'Boltor',
    'Boltor Prime',
    'Telos Boltor',
    'Braton',
    'MK1-Braton',
    'Braton Prime',
    'Braton Vandal',
    'Burston',
    'Burston Prime',
    'Buzlok',
    'Dera',
    'Dera Vandal',
    'Gorgon',
    'Prisma Gorgon',
    'Gorgon Wraith',
    'Grakata',
    'Prisma Grakata',
    'Grinlok',
    'Harpak',
    'Hema',
    'Hind',
    'Karak',
    'Karak Wraith',
    'Latron',
    'Latron Prime',
    'Latron Wraith',
    'Mutalist Quanta',
    'Opticor',
    'Paracyst',
    'Quartakk',
    'Soma',
    'Soma Prime',
    'Stradavar',
    'Supra',
    'Supra Vandal',
    'Sybaris',
    'Dex Sybaris',
    'Sybaris Prime',
    'Tenora',
    'Tetra',
    'Prisma Tetra',
    'Tiberon',
    'Tiberon Prime',
    'Veldt',
    'Zenith',
  ],
  [CONTINUOUS_RIFLE]: [
    'Amprex',
    'Flux Rifle',
    'Glaxion',
    'Ignis',
    'Ignis Wraith',
    'Quanta',
    'Quanta Vandal',
    'Synapse',
  ],
  [SPEARGUN_RIFLE]: [
    'Ferrox',
    'Javlok',
    'Scourge',
  ],
  [SHOTGUN]: [
    'Arca Plasmor',
    'Astilla',
    'Boar',
    'Boar Prime',
    'Convectrix',
    'Corinth',
    'Drakgoon',
    'Hek',
    'Vaykor Hek',
    'Kohm',
    'Phage',
    'Phantasma',
    'Sobek',
    'Strun',
    'MK1-Strun',
    'Strun Wraith',
    'Tigris',
    'Tigris Prime',
    'Sancti Tigris',
  ],
  [SNIPER]: [
    'Lanka',
    'Rubico',
    'Snipetron',
    'Snipetron Vandal',
    'Vectis',
    'Vectis Prime',
    'Vulkar',
    'Vulkar Wraith',
  ],
  [BOW]: [
    'Attica',
    'Cernos',
    'Cernos Prime',
    'Rakta Cernos',
    'Daikyu',
    'Dread',
    'Lenz',
    'Mutalist Cernos',
    'Paris',
    'MK1-Paris',
    'Paris Prime',
    'Zhuge',
  ],
  [LAUNCHER]: [
    'Miter',
    'Ogris',
    'Panthera',
    'Penta',
    // Only avaliable in Warframe China
    // 'Carmine Penta',
    'Secura Penta',
    'Simulor',
    'Synoid Simulor',
    'Tonkor',
    'Torid',
    'Zarr',
  ],
  // Exalted items do not provide mastery rank, but we'll keep them here to avoid confusion.
  // [EXALTED]: [
  //   'Artemis Bow',
  // ],
};

const SINGLE_PISTOL = 'Single Pistol';
const CONTINUOUS_PISTOL = 'Continuous Pistol';
const SHOTGUN_PISTOL = 'Shotgun Pistol';
const DUAL_PISTOLS = 'Dual Pistols';
const THROWN_SECONDARY = 'Thrown';

const Secondary = {
  [SINGLE_PISTOL]: [
    'Acrid',
    'Angstrum',
    'Prisma Angstrum',
    'Arca Scisco',
    'Azima',
    'Ballistica',
    'Ballistica Prime',
    'Rakta Ballistica',
    'Bolto',
    'Cestra',
    'Furis',
    'MK1-Furis',
    'Hystrix',
    'Knell',
    'Kraken',
    'Kulstar',
    'Lato',
    'Lato Prime',
    'Lato Vandal',
    'Lex',
    'Lex Prime',
    'Magnus',
    'Marelok',
    'Vaykor Marelok',
    'Pandero',
    'Seer',
    'Sicarus',
    'Sicarus Prime',
    'Sonicor',
    'Stubba',
    'Stug',
    'Tysis',
    'Vasto',
    'Vasto Prime',
    'Viper',
    'Viper Wraith',
    'Zakti',
    'Zylok',
  ],
  [CONTINUOUS_PISTOL]: [
    'Atomos',
    'Cycron',
    'Embolist',
    'Gammacor',
    'Synoid Gammacor',
    'Nukor',
    'Spectra',
  ],
  [SHOTGUN_PISTOL]: [
    'Brakk',
    'Bronco',
    'Bronco Prime',
    'Detron',
    'Mara Detron',
    'Euphona Prime',
    'Kohmak',
    'Pyrana',
    'Pyrana Prime',
  ],
  [DUAL_PISTOLS]: [
    'Afuris',
    'Dex Furis',
    'Akbolto',
    'Akbolto Prime',
    'Telos Akbolto',
    'Akbronco',
    'Akbronco Prime',
    'Akjagara',
    'Aklato',
    'Aklex',
    'Aklex Prime',
    'Akmagnus',
    'Aksomati',
    'Akstiletto',
    'Akstiletto Prime',
    'Akvasto',
    'Akzani',
    'Dual Cestra',
    'Secura Dual Cestra',
    'Dual Toxocyst',
    'Staticor',
    'Twin Grakatas',
    'Twin Gremlins',
    'Prisma Twin Gremlins',
    'Twin Kohmak',
    'Twin Rogga',
    'Twin Vipers',
    'Twin Vipers Wraith',
  ],
  [THROWN_SECONDARY]: [
    'Castanas',
    'Sancti Castanas',
    'Despair',
    'Fusilai',
    'Hikou',
    'Hikou Prime',
    'Kunai',
    'MK1-Kunai',
    'Pox',
    'Spira',
    'Spira Prime',
    'Talons',
  ],
  // Exalted items do not provide mastery rank, but we'll keep them here to avoid confusion.
  // [EXALTED]: [
  //   'Dex Pixia',
  //   'Regulators',
  // ],
};

const ArchwingMelee = {
  'Archwing Melee': [
    'Agkuza',
    'Centaur',
    'Kaszas',
    'Knux',
    'Onorix',
    'Rathbone',
    'Veritux',
    'Prisma Veritux',
  ],
};

const ArchwingPrimary = {
  'Archwing Gun': [
    'Corvas',
    'Cyngas',
    'Dual Decurion',
    'Fluctus',
    'Grattler',
    'Imperator',
    'Imperator Vandal',
    'Phaedra',
    'Velocitus',
  ],
};

const SentinelWeapon = {
  [RIFLE]: [
    'Artax',
    'Deth Machine Rifle',
    'Laser Rifle',
    'Prime Laser Rifle',
    'Stinger',
  ],
  [SHOTGUN]: [
    'Sweeper',
    'Sweeper Prime',
  ],
  [SNIPER]: [
    'Vulklok',
  ],
  Pistol: [
    'Burst Laser',
    'Prisma Burst Laser',
  ],
  Melee: [
    'Deconstructor',
    'Deconstructor Prime',
  ],
};

const CATEGORIES = {
  Melee,
  Primary,
  Secondary,
  ArchwingMelee,
  ArchwingPrimary,
  SentinelWeapon,
};

const MISSING_ITEMS = {
  Kavat: [
    {
      id: '/Lotus/Types/Game/CatbrowPet/CheshireCatbrowPetPowerSuit',
      name: 'Venari Kavat',
      type: 'Kavat',
      masteryRank: 0,
      wiki: 'http://warframe.wikia.com/wiki/Kavat#Venari',
    },
  ],
};

module.exports = { CATEGORIES, MISSING_ITEMS };
