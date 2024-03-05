// Possible races to choose from.
//
// FIXME: Add the rest!
export enum Race {
  Dragonborn = "Dragonborn",
  Dwarf = "Dwarf",
  Elf = "Elf",
  Gnome = "Gnome",
  HalfElf = "Half-Elf",
  HalfOrc = "Half-Orc",
  Halfling = "Halfling",
  Human = "Human",
  Tiefling = "Tiefling",
  Custom = "Custom",
  Aarakocra = "Aarakocra",
  Aasimar = "Aasimar",
  Changeling = "Changeling",
  DeepGnome = "Deep Gnome",
  Duergar = "Duergar",
  Eladrin = "Eladrin",
  Fairy = "Fairy",
  Firbolg = "Firbolg",
  GenasiAir = "Genasi (Air)",
  GenasiEarth = "Genasi (Earth)",
  GenasiFire = "Genasi (Fire)",
  GenasiWater = "Genasi (Water)",
  Githyanki = "Githyanki",
  Githzerai = "Githzerai",
  Goliath = "Goliath",
  Harengon = "Harengon",
  Kenku = "Kenku",
  Locathah = "Locathah",
  Owlin = "Owlin",
  Satyr = "Satyr",
  SeaElf = "Sea Elf",
  ShadarKai = "Shadar-Kai",
  Tabaxi = "Tabaxi",
  Tortle = "Tortle",
  Triton = "Triton",
  Verdan = "Verdan",
  Bugbear = "Bugbear",
  Centaur = "Centaur",
  Goblin = "Goblin",
  Grung = "Grung",
  Hobgoblin = "Hobgoblin",
  Kobold = "Kobold",
  Lizardfolk = "Lizardfolk",
  Minotaur = "Minotaur",
  Orc = "Orc",
  Shifter = "Shifter",
  YuanTi = "Yuan-Ti",
  Kalashtar = "Kalashtar",
  Warforged = "Warforged",
  Kender = "Kender",
  Aetherborn = "Aetherborn",
  Aven = "Aven",
  Khenra = "Khenra",
  Kor = "Kor",
  Merfolk = "Merfolk",
  Naga = "Naga",
  Siren = "Siren",
  Vampire = "Vampire",
  Dhamphir = "Dhamphir",
  Hexblood = "Hexblood",
  Reborn = "Reborn",
  Loxodon = "Loxodon",
  SimicHybrid = "Simic Hybrid",
  Vedalken = "Vedalken",
  AstralElf = "Astral Elf",
  Autognome = "Autognome",
  Giff = "Giff",
  Hadozee = "Hadozee",
  Plasmoid = "Plasmoid",
  Thrikreen = "Thri-kreen",
  Leonin = "Leonin",
  Glitchling = "Glitchling",
  Owlfolk = "Owlfolk",
  Rabbitfolk = "Rabbitfolk",
  Revenant = "Revenant",
  Viashino = "Viashino",
}

export interface RaceInfo {
  race: string;
  component?: any;
  display: boolean;
}

export interface Subtype {
  name: string;
  source: string;
  info: SubtypeInfo;
}

export enum Size {
  Small,
  Medium,
  Large,
}

export enum Attributes {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
}

export interface SubtypeInfo {
  asi: { [index: Attributes]: number };
  size: Size;
  misc: { [index: string]: any };
}

