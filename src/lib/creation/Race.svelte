<script lang="ts">
  import Dragonborn from "./races/Dragonborn.svelte";
  import { Race, type RaceInfo } from "../types/Races.d";

  // Get types of races from the `Race` enum.
  const raceTypes = Object.values(Race);

  // Associate svelte components for each race.
  const raceComponents = raceTypes.map((r) => {
    switch (r) {
      case Race.Dragonborn:
        return Dragonborn;

      // FIXME: Add other races!

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
    width: 80%;
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
