export enum AttributeType {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
}

export interface Attribute {
  type: AttributeType;
  value: Number;
}

export interface RaceType {
  asi: Attribute[];
  speed: Number;
  misc?: any;
}
