<script lang="ts">
  import CreateCharacter from "./CreateCharacter.svelte";
  import LoadCharacter from "./LoadCharacter.svelte";

  let createCharClicked = false;
  let loadCharClicked = false;
  let mainPageClicked = true;

  function mainPage() {
    mainPageClicked = true;
  }

  function createCharacterPage() {
    createCharClicked = true;
    mainPageClicked = false;
  }

  function loadCharacterPage() {
    loadCharClicked = true;
    mainPageClicked = false;
  }
</script>

{#if mainPageClicked}
  <div id="main-menu">
    <div>
      <label>
        <button class="main-menu-item" on:click={createCharacterPage}
          >Create Character</button
        >
      </label>
    </div>

    <div>
      <label>
        <button class="main-menu-item" on:click={loadCharacterPage}
          >Load Character</button
        >
      </label>
    </div>
  </div>
{:else if createCharClicked}
  <div><label><button on:click={mainPage}>Main Menu</button></label></div>
  <CreateCharacter />
{:else if loadCharClicked}
  <div><label><button on:click={mainPage}>Main Menu</button></label></div>
  <CreateCharacter />
{/if}

<style>
  #main-menu {
    margin-top: 20vh;
  }

  .main-menu-item {
    width: 50vw;
    margin-bottom: 20vh;
  }
</style>
