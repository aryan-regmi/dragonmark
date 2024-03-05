<script lang="ts">
  import CreateCharacter from "./create/Main.svelte";

  enum Option {
    Main,
    Create,
    Load,
  }

  // The currently selected menu option.
  let currOpt = Option.Main;

  /// Go to main menu.
  function mainMenu() {
    currOpt = Option.Main;
  }

  // Create character page.
  function createChar() {
    currOpt = Option.Create;
  }

  // Load character page.
  function loadChar() {
    currOpt = Option.Load;
  }
</script>

{#if currOpt === Option.Main}
  <div id="main-menu">
    <div>
      <button
        class="main-menu-item"
        id="create-character-btn"
        on:click={createChar}>Create Character</button
      >
    </div>

    <div><img id="main-menu-logo" src="/DndLogo.png" alt="Dnd Logo" /></div>

    <div>
      <button class="main-menu-item" id="load-character-btn" on:click={loadChar}
        >Load Character</button
      >
    </div>
  </div>
{:else if currOpt === Option.Create}
  <div><button id="main-menu-btn" on:click={mainMenu}>Main Menu</button></div>
  <CreateCharacter />
{:else if currOpt === Option.Load}
  <div><button id="main-menu-btn" on:click={mainMenu}>Main Menu</button></div>
  <!-- TODO: LOAD CHAR SLOT -->
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
