<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Name from "./characterCreation/Name.svelte";
  import Race from "./characterCreation/Race.svelte";

  let switchPage: (newPage: number) => void;
  let currPage: string;
  let navOpts = ["Name", "Race", "Class", "Background"];

  // Character info
  let characterName: string;
  let race: string;
</script>

<div><Navbar {navOpts} bind:switchPage bind:currPage /></div>

{#if currPage === "Name"}
  <Name bind:name={characterName} />
  <div class="next-page">
    <button class="next-page-btn" on:click={() => switchPage(1)}>Next</button>
  </div>
{:else if currPage === "Race"}
  <Race bind:chosenRace={race} />
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

  .next-page-btn {
    background-color: #33ccff;
    opacity: 90%;
  }

  .next-page-btn:disabled {
    background-color: gray;
  }
</style>
