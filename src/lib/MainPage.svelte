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
  <div>
    <img id="main-page-logo" src="../../public/DndLogo.png" alt="Dnd Image" />
  </div>
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
  #main-menu {
    margin-top: 3vh;
  }

  .main-menu-item {
    width: 50vw;
    margin-bottom: 20vh;
    opacity: 100%;
  }

  button:hover {
    border-color: red;
    color: red;
  }

  #main-page-logo {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
    height: 20vh;
    justify-self: center;
  }
</style>
