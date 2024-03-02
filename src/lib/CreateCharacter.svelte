<script lang="ts">
  import CreationNavbar from "./CreationNavbar.svelte";
  import { NavbarPage } from "./types/NavbarPage.d";
  import CharacterName from "./CharacterName.svelte";
  import RaceMain from "./races/RaceMain.svelte";

  let currPage: any;
  let namePage: any;
  let racePage: any;
  let classPage: any;
  let backgroundPage: any;

  $: currPage;
  function nextPage() {
    if (currPage === NavbarPage.Name) {
      racePage();
    } else if (currPage === NavbarPage.Race) {
      classPage();
    } else if (currPage === NavbarPage.Class) {
      backgroundPage();
    }
  }

  // Data to send to rust
  let characterName: string;
  let chosenRace: string;
</script>

<CreationNavbar
  bind:currPage
  bind:namePage
  bind:racePage
  bind:classPage
  bind:backgroundPage
/>

{#if currPage === NavbarPage.Name}
  <CharacterName bind:characterName />
{:else if currPage === NavbarPage.Race}
  <RaceMain bind:chosenRace />
{/if}

{#if currPage !== NavbarPage.Background}
  <div id="next-page">
    <button id="next-page-btn" on:click={nextPage}>Next</button>
  </div>
{:else}
  <div id="next-page">
    <button id="next-page-btn">Create</button>
  </div>
{/if}

<style>
  #next-page {
    padding-top: 5vh;
  }

  #next-page-btn {
    background-color: #33ccff;
    opacity: 90%;
  }
</style>
