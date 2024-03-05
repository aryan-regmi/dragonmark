import type { Races } from "./Races.d";

// The character info to pass to the back end.
//
// FIXME: Add the rest of the fields (class, background, etc)
export interface CharacterInfo {
  name: string;
  race: Races;
}
