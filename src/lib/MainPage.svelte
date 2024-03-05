<script lang="ts">
  import CreateCharacter from "./CreateCharacter.svelte";
  import LoadCharacter from "./LoadCharacter.svelte";

  // TODO: Add search bar

  // The options in the main menu.
  enum MainMenuOpts {
    Main,
    Create,
    Load,
  }
  let currOpt = MainMenuOpts.Main;

  function createCharacter() {
    currOpt = MainMenuOpts.Create;
  }

  function loadCharacter() {
    currOpt = MainMenuOpts.Load;
  }

  function mainMenu() {
    currOpt = MainMenuOpts.Main;
  }
</script>

{#if currOpt === MainMenuOpts.Main}
  <div id="main-menu">
    <button class="main-menu-item" on:click={createCharacter}
      >Create Character</button
    >
    <div><img id="main-menu-logo" src="/DndLogo.png" alt="Dnd Logo" /></div>
    <button class="main-menu-item" on:click={loadCharacter}
      >Load Character</button
    >
  </div>
{:else if currOpt === MainMenuOpts.Create}
  <div><button id="main-menu-btn" on:click={mainMenu}>Main Menu</button></div>
  <CreateCharacter />
{:else if currOpt === MainMenuOpts.Load}
  <div><button id="main-menu-btn" on:click={mainMenu}>Main Menu</button></div>
  <LoadCharacter />
{/if}

<style>
  #main-menu {
    margin-top: 5vh;
  }

  #main-menu-logo {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
    height: 20vh;
    justify-content: center;
  }

  .main-menu-item {
    width: 50vw;
    margin-bottom: 5vh;
    margin-top: 5vh;
  }
</style>
