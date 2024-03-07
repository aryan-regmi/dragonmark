<script lang="ts">
  import Dragonborn from "./races/Dragonborn.svelte";
  import Dwarf from "./races/Dwarf.svelte";
  import Elf from "./races/Elf.svelte";
  import { Race, type RaceInfo } from "../types/Races.d";

  // Get types of races from the `Race` enum.
  const raceTypes = Object.values(Race);

  // Associate svelte components for each race.
  const raceComponents = raceTypes.map((r) => {
    switch (r) {
      case Race.Dragonborn:
        return Dragonborn;
      case Race.Dwarf:
        return Dwarf;
      case Race.Elf:
        return Elf;
      case Race.Gnome:
      case Race.HalfElf:
      case Race.HalfOrc:
      case Race.Halfling:
      case Race.Human:
      case Race.Tiefling:
      case Race.Custom:
      case Race.Aarakocra:
      case Race.Aasimar:
      case Race.Changeling:
      case Race.DeepGnome:
      case Race.Duergar:
      case Race.Eladrin:
      case Race.Fairy:
      case Race.Firbolg:
      case Race.GenasiAir:
      case Race.GenasiEarth:
      case Race.GenasiFire:
      case Race.GenasiWater:
      case Race.Githyanki:
      case Race.Githzerai:
      case Race.Goliath:
      case Race.Harengon:
      case Race.Kenku:
      case Race.Locathah:
      case Race.Owlin:
      case Race.Satyr:
      case Race.SeaElf:
      case Race.ShadarKai:
      case Race.Tabaxi:
      case Race.Tortle:
      case Race.Triton:
      case Race.Verdan:
      case Race.Bugbear:
      case Race.Centaur:
      case Race.Goblin:
      case Race.Grung:
      case Race.Hobgoblin:
      case Race.Kobold:
      case Race.Lizardfolk:
      case Race.Minotaur:
      case Race.Orc:
      case Race.Shifter:
      case Race.YuanTi:
      case Race.Kalashtar:
      case Race.Warforged:
      case Race.Kender:
      case Race.Aetherborn:
      case Race.Aven:
      case Race.Khenra:
      case Race.Kor:
      case Race.Merfolk:
      case Race.Naga:
      case Race.Siren:
      case Race.Vampire:
      case Race.Dhamphir:
      case Race.Hexblood:
      case Race.Reborn:
      case Race.Loxodon:
      case Race.SimicHybrid:
      case Race.Vedalken:
      case Race.AstralElf:
      case Race.Autognome:
      case Race.Giff:
      case Race.Hadozee:
      case Race.Plasmoid:
      case Race.Thrikreen:
      case Race.Leonin:
      case Race.Glitchling:
      case Race.Owlfolk:
      case Race.Rabbitfolk:
      case Race.Revenant:
      case Race.Viashino:
        return null;

      default:
        return null;
    }
  });

  // Create races from `Race` enum.
  let races: RaceInfo[] = [];
  $: for (let i = 0; i < raceTypes.length; i++) {
    races[i] = {
      race: raceTypes[i],
      component: raceComponents[i],
      display: false,
    };
  }

  // Display overlay of race info.
  let currOpen = -1;
  function raceInfo(idx: number) {
    if (races[idx].component !== null) {
      races[idx].display = true;
    }
    currOpen = idx;
  }

  // Close race info overlay.
  function closeOverlay(idx: number) {
    races[idx].display = !races[idx].display;
  }

  const chosenStyle = "color: orange;";
  let chosenRace = "";
  function chooseRace(idx: number) {
    chosenRace = races[idx].race;
    closeOverlay(idx);
  }

  // Disable `Choose` button if race has subtypes to choose etc
  let hasSubtype: boolean;
  let subtypeChosen: boolean;
  $: disabledBtn = hasSubtype !== subtypeChosen;

  // TODO: Get detailed race info from the chosen race
</script>

<ul id="races">
  {#each races as race, i}
    <li class="race">
      {#if race.race === chosenRace}
        <button
          class="race-btn"
          id={race.race}
          style={chosenStyle}
          popovertarget="overlay-content"
          on:click={() => raceInfo(i)}>{race.race}</button
        >
      {:else}
        <button
          class="race-btn"
          id={race.race}
          popovertarget="overlay-content"
          on:click={() => raceInfo(i)}>{race.race}</button
        >
      {/if}
    </li>

    {#if race.display && i === currOpen}
      <div id="overlay-content" popover="auto">
        <svelte:component
          this={race.component}
          bind:hasSubtype
          bind:subtypeChosen
        ></svelte:component>
        <div class="btns">
          <button disabled={disabledBtn} on:click={() => chooseRace(i)}
            >Choose</button
          >
          <button on:click={() => closeOverlay(i)}>Close</button>
        </div>
      </div>
    {/if}
  {/each}
</ul>

<style>
  #overlay-content {
    background-color: #391313;
    opacity: 98%;
    width: 75%;
    height: 80%;
  }

  .btns {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  .race-btn {
    font-size: 20px;
    background: none;
    box-shadow: none;
    padding: 0;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .race-btn:hover {
    color: #ff6699;
  }

  ul {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "col1-item1 col2-item1 col3-item1"
      "col1-item2 col2-item2 col3-item2"
      "col1-item3 col2-item3 col3-item3"
      "col1-item4 col2-item3 col3-item4";
  }

  li {
    display: inline;
  }

  button:disabled {
    border-color: gray;
    color: black;
  }
  button:disabled:hover {
    border-color: gray;
    color: black;
  }
</style>
