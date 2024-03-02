<script lang="ts">
  import CreateCharacter from "./CreateCharacter.svelte";
  import LoadCharacter from "./LoadCharacter.svelte";

  enum Option {
    Main,
    Create,
    Load,
  }

  let currOpt = Option.Main;

  let createCharClicked = false;
  let loadCharClicked = false;
  let mainPageClicked = true;

  function mainPage() {
    createCharClicked = false;
    loadCharClicked = false;
    mainPageClicked = true;
  }

  function createCharacterPage() {
    createCharClicked = true;
    loadCharClicked = false;
    mainPageClicked = false;
  }

  function loadCharacterPage() {
    createCharClicked = false;
    loadCharClicked = true;
    mainPageClicked = false;
  }
</script>

{#if mainPageClicked}
  <div id="main-menu">
    <div>
      <label>
        <button
          id="create-character-button"
          class="main-menu-item"
          on:click={createCharacterPage}>Create Character</button
        >
      </label>
    </div>

    <div>
      <img id="main-page-logo" src="/DndLogo.png" alt="Dnd logo" />
    </div>

    <div>
      <label>
        <button
          id="load-character-button"
          class="main-menu-item"
          on:click={loadCharacterPage}>Load Character</button
        >
      </label>
    </div>
  </div>
{:else if createCharClicked}
  <div>
    <label><button on:click={mainPage}>Main Menu</button></label>
  </div>
  <CreateCharacter />
{:else if loadCharClicked}
  <div>
    <label><button on:click={mainPage}>Main Menu</button></label>
  </div>
  <LoadCharacter />
{/if}

<style>
  button:hover {
    border-color: red;
    color: red;
  }

  #main-menu {
    margin-top: 3vh;
  }

  .main-menu-item {
    width: 50vw;
    opacity: 100%;
  }

  #create-character-button {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }

  #load-character-button {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  #main-page-logo {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
    height: 20vh;
    justify-self: center;
  }
</style>
