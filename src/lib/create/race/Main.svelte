<script lang="ts">
  import Dragonborn from "./Dragonborn.svelte";

  type RaceDisplayInfo = { [index: string]: { data: any; visible: boolean } };
  const races: RaceDisplayInfo = {
    Dragonborn: { data: Dragonborn, visible: false },
    Dwarf: { data: null, visible: false },
    Elf: { data: null, visible: false },
    Gnome: { data: null, visible: false },
    "Half-Elf": { data: null, visible: false },
    "Half-Orc": { data: null, visible: false },
    Halfling: { data: null, visible: false },
    Human: { data: null, visible: false },
    Tiefling: { data: null, visible: false },
    Custom: { data: null, visible: false },
    Aarakocra: { data: null, visible: false },
    Aasimar: { data: null, visible: false },
    Changeling: { data: null, visible: false },
    Deep: { data: null, visible: false },
    Duergar: { data: null, visible: false },
    Eladrin: { data: null, visible: false },
    Fairy: { data: null, visible: false },
    Firbolg: { data: null, visible: false },
    "Genasi (Air)": { data: null, visible: false },
    "Genasi (Earth)": { data: null, visible: false },
    "Genasi (Fire)": { data: null, visible: false },
    "Genasi (Water)": { data: null, visible: false },
    Githyanki: { data: null, visible: false },
    Githzerai: { data: null, visible: false },
    Goliath: { data: null, visible: false },
    Harengon: { data: null, visible: false },
    Kenku: { data: null, visible: false },
    Locathah: { data: null, visible: false },
    Owlin: { data: null, visible: false },
    Satyr: { data: null, visible: false },
    "Sea Elf": { data: null, visible: false },
    "Shadar-Kai": { data: null, visible: false },
    Tabaxi: { data: null, visible: false },
    Tortle: { data: null, visible: false },
    Triton: { data: null, visible: false },
    Verdan: { data: null, visible: false },
    Bugbear: { data: null, visible: false },
    Centaur: { data: null, visible: false },
    Goblin: { data: null, visible: false },
    Grung: { data: null, visible: false },
    Hobgoblin: { data: null, visible: false },
    Kobold: { data: null, visible: false },
    Lizardfolk: { data: null, visible: false },
    Minotaur: { data: null, visible: false },
    Orc: { data: null, visible: false },
    Shifter: { data: null, visible: false },
    "Yuan-Ti": { data: null, visible: false },
    Kender: { data: null, visible: false },
    Kalashtar: { data: null, visible: false },
    Warforged: { data: null, visible: false },
    Aetherborn: { data: null, visible: false },
    Aven: { data: null, visible: false },
    Khenra: { data: null, visible: false },
    Kor: { data: null, visible: false },
    Merfolk: { data: null, visible: false },
    Naga: { data: null, visible: false },
    Siren: { data: null, visible: false },
    Vampire: { data: null, visible: false },
    Dhamphir: { data: null, visible: false },
    Hexblood: { data: null, visible: false },
    Reborn: { data: null, visible: false },
    Loxodon: { data: null, visible: false },
    "Simic Hybrid": { data: null, visible: false },
    Vedalken: { data: null, visible: false },
    "Astral Elf": { data: null, visible: false },
    Autognome: { data: null, visible: false },
    Hadozee: { data: null, visible: false },
    "Thri-kreen": { data: null, visible: false },
    Leonin: { data: null, visible: false },
    Giff: { data: null, visible: false },
    Glitchling: { data: null, visible: false },
    Owlfolk: { data: null, visible: false },
    Plasmoid: { data: null, visible: false },
    Rabbitfolk: { data: null, visible: false },
    Revenant: { data: null, visible: false },
    Viashino: { data: null, visible: false },
  };

  // Determines which race is currently chosen
  export let chosenRace = "";
  let chosenStyle = "color: orange";

  function showInfo(this: any) {
    races[this.id].visible = true;
    chosenRace = this.id;
  }
</script>

<ul id="races-list">
  {#each Object.entries(races) as [race, data]}
    {#if race === chosenRace}
      <li class="race">
        <button
          class="race-btn"
          id={race}
          style={chosenStyle}
          on:click={showInfo}>{race}</button
        >
      </li>
    {:else}
      <li class="race">
        <button class="race-btn" id={race} on:click={showInfo}>{race}</button>
      </li>
    {/if}

    {#if data.visible}
      <svelte:component this={data.data} bind:toggle={data.visible}
      ></svelte:component>
    {/if}
  {/each}
</ul>

<style>
  .race-btn {
    font-size: 20px;
    background: none;
    box-shadow: none;
    padding: 0;
    padding-left: 1vw;
    padding-right: 1vw;
    /* margin-top: 0.1vh; */
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
</style>
