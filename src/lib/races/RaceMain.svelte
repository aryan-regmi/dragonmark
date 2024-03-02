<script lang="ts">
  const races = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Halfling",
    "Human",
    "Tiefling",
    "Custom",
    "Custom",
    "Aarakocra",
    "Aasimar",
    "Changeling",
    "Deep",
    "Gnome",
    "Duergar",
    "Eladrin",
    "Fairy",
    "Firbolg",
    "Genasi (Air)",
    "Genasi (Earth)",
    "Genasi (Fire)",
    "Genasi (Water)",
    "Githyanki",
    "Githzerai",
    "Goliath",
    "Harengon",
    "Kenku",
    "Locathah",
    "Owlin",
    "Satyr",
    "Sea Elf",
    "Shadar-Kai",
    "Tabaxi",
    "Tortle",
    "Triton",
    "Verdan",
    "Bugbear",
    "Centaur",
    "Goblin",
    "Grung",
    "Hobgoblin",
    "Kobold",
    "Lizardfolk",
    "Minotaur",
    "Orc",
    "Shifter",
    "Yuan-Ti",
    "Kender",
    "Kalashtar",
    "Warforged",
    "Aetherborn",
    "Aven",
    "Khenra",
    "Kor",
    "Merfolk",
    "Naga",
    "Siren",
    "Vampire",
    "Dhamphir",
    "Hexblood",
    "Reborn",
    "Loxodon",
    "Simic Hybrid",
    "Vedalken",
    "Astral Elf",
    "Autognome",
    "Hadozee",
    "Thri-kreen",
    "Leonin",
    "Giff",
    "Glitchling",
    "Owlfolk",
    "Plasmoid",
    "Rabbitfolk",
    "Revenant",
    "Viashino",
  ].sort();

  export let chosenRace = "";

  function raceInfo(this: any) {
    chosenRace = this.id;
    // TODO: Open info for the clicked race
    // (make it permanantly chang color if chosen)
  }
</script>

<ul class="races">
  {#each races as race}
    <li class="race-item">
      <button class="race-btn" id={race} on:click={raceInfo}
        ><strong>{race}</strong></button
      >
    </li>
  {/each}
</ul>

<style>
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
    vertical-align: top;
    padding-right: 1.5vw;
    padding-left: 0.1vw;
  }

  .race-btn {
    border: none;
    margin: 0;
    padding: 0;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .race-btn:hover {
    color: #ff6699;
  }
</style>
