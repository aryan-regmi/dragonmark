<script lang="ts">
  import CreateCharNavbar from "./Navbar.svelte";
  import { CreateCharNavbar as Navbar } from "../types/CreateCharNavbar.d";
  import type { SwitchPages } from "../types/SwitchPages.d";
  import Name from "./Name.svelte";
  import Race from "./race/Main.svelte";
  import Class from "./class/Main.svelte";
  import Background from "./background/Main.svelte";

  // The current page in the `Create Character` menu.
  let currPage: Navbar;

  // Goes to the next page in the navbar.
  let switchPages: SwitchPages;
  function nextPage() {
    switch (currPage) {
      case Navbar.Name:
        switchPages.race();
        break;

      case Navbar.Race:
        switchPages.class();
        break;

      case Navbar.Class:
        switchPages.background();
        break;

      default:
        break;
    }
  }

  // Validations
  $: validName = name?.length > 0;
  $: validRace = false;
  $: validClass = false;
  $: validBackground = false;
  $: allValid = validName && validRace && validClass && validBackground;

  // FIXME: Write func to save data
  function create() {}

  // Character info
  let name: string;
  let race: any;
</script>

<!-- Displays the navbar -->
<CreateCharNavbar bind:currPage bind:switchPages />

<!-- Displays the corresponding page -->
{#if currPage === Navbar.Name}
  <Name bind:name />
  <div id="next-page">
    <button
      class="nav-btn"
      id="next-page-btn"
      on:click={nextPage}
      disabled={!validName}>Next</button
    >
  </div>
{:else if currPage === Navbar.Race}
  <Race bind:chosenRace={race} />
  <div id="next-page">
    <button
      class="nav-btn"
      id="next-page-btn"
      on:click={nextPage}
      disabled={!validRace}>Next</button
    >
  </div>
{:else if currPage === Navbar.Class}
  <Class />
  <div id="next-page">
    <button on:click={nextPage} disabled={!validClass}>Next</button>
  </div>
{:else if currPage === Navbar.Background}
  <Background />
  <div id="next-page">
    <button on:click={create} disabled={!allValid}>Create</button>

    {#if !allValid}
      <ul id="invalid-msgs">
        <strong style="text-decoration: underline;">Invalid Character:</strong>
        {#if !validName}
          <li>Character name must not be empty</li>
        {/if}
        {#if !validRace}
          <li>No race chosen</li>
        {/if}
        {#if !validClass}
          <li>No class chosen</li>
        {/if}
        {#if !validBackground}
          <li>Background info for the character is missing</li>
        {/if}
      </ul>
    {/if}
  </div>
{/if}

<style>
  #next-page {
    padding-top: 1vh;
  }

  button {
    background-color: #33ccff;
    opacity: 90%;
  }

  button:disabled {
    background-color: gray;
  }

  #invalid-msgs {
    justify-content: center;
  }

  ul {
    color: red;
    background-color: black;
    opacity: 75%;
    border-radius: 2vh;
  }
</style>
