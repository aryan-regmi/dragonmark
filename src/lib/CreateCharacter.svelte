<script lang="ts">
  import type { CharacterInfo } from "./types/CharacterInfo.d";
  import { Race } from "./types/Races.d";
  import Navbar from "./Navbar.svelte";
  import Name from "./creation/Name.svelte";
  import Races from "./creation/Race.svelte";

  let switchPage: (newPage: number) => void;
  let currPage: string;
  let navOpts = ["Name", "Race", "Class", "Background"];

  export const charcacterInfo: CharacterInfo = {
    name: "",
    race: Race.Dragonborn,
  };
</script>

<div><Navbar {navOpts} bind:switchPage bind:currPage /></div>

{#if currPage === "Name"}
  <Name bind:name={charcacterInfo.name} />
  <div class="next-page">
    <button class="next-page-btn" on:click={() => switchPage(1)}>Next</button>
  </div>
{:else if currPage === "Race"}
  <Races />
  <div class="next-page">
    <button class="next-page-btn" on:click={() => switchPage(2)}>Next</button>
  </div>
{:else if currPage === "Class"}
  <div class="next-page">
    <button class="next-page-btn" on:click={() => switchPage(3)}>Next</button>
  </div>
{:else if currPage === "Background"}
  <!-- TODO: Add `create` button which is disabled until validation! -->
{/if}

<style>
  .next-page {
    padding-top: 2vh;
  }

  button {
    background-color: #33ccff;
    opacity: 90%;
  }

  button:disabled {
    background-color: gray;
  }
</style>
