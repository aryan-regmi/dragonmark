<script lang="ts">
  import Overlay from "./Overlay.svelte";
  import Dropdown from "./Dropdown.svelte";
  import type { SourceType } from "../../types/SourceType.d";
  import {
    AttributeType,
    type Attribute,
    type RaceType,
  } from "../../types/Dragonborn.d";

  export let toggle: boolean; // Toggles the overlay
  export let chosenRace: string = ""; // Lets `race/Main` know which race was chosen
  let chosenSubtype: string = "Black";

  let sources: SourceType = {
    phb: "Player's Handbook",
    wildemount: "Explorer's Guide to Wildemount",
    fizban: "Fizban's Treasury of Dragons",
    ua: "Unearthed Arcana",
  };
  let currentSource = sources["phb"];

  let subtypes = {
    phb: { black: "Black", blue: "Blue", brass: "Brass" },
    wildemount: [],
    fizban: [],
    ua: [],
  };

  export let raceData: RaceType = {
    asi: [
      { type: AttributeType.STR, value: 2 },
      { type: AttributeType.CHA, value: 1 },
    ],
    speed: 30,
  };
</script>

<Overlay
  bind:toggle
  bind:chosenRace
  race="Dragonborn"
  hasSubtypes={true}
  subtypeChosen={true}
>
  <Dropdown {sources} bind:currChoice={currentSource} />

  <div id="contents">
    {#if currentSource === sources["phb"]}
      <div id="summary">
        <strong
          ><em>
            Born of dragons, as their name proclaims, the dragonborn walk
            proudly through a world that greets them with fearful
            incomprehension. Shaped by draconic gods or the dragons themselves,
            dragonborn originally hatched from dragon eggs as a unique race,
            combining the best attributes of dragons and humanoids. Some
            dragonborn are faithful servants to true dragons, others form the
            ranks of soldiers in great wars, and still others find themselves
            adrift, with no clear calling in life.
          </em></strong
        >
      </div>

      <div id="subtype-choices">
        <Dropdown
          sources={subtypes.phb}
          mainButtonMsg="Choose Subtype:"
          bind:currChoice={chosenSubtype}
        />
      </div>
    {:else if currentSource === sources["wildemount"]}
      WILDEMOUNT
      <!-- TODO: Impl -->
    {:else if currentSource === sources["fizban"]}
      FIZBAN
      <!-- TODO: Impl -->
    {:else if currentSource === sources["ua"]}
      UA
      <!-- TODO: Impl -->
    {/if}
  </div>
</Overlay>

<style>
  #summary {
    padding-top: 1vh;
    padding-bottom: 2vh;
  }
</style>
