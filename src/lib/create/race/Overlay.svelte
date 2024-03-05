<script lang="ts">
  export let race: string;
  export let hasSubtypes: boolean;
  export let subtypeChosen: boolean;

  export let toggle: boolean;
  function close() {
    toggle = !toggle;
  }

  function disabledBtn(): boolean {
    if (hasSubtypes) {
      if (subtypeChosen) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  let disableChooseBtn = disabledBtn();
  export let chosenRace: string;
  function choose() {
    chosenRace = race;
    close();
  }
</script>

{#if toggle}
  <div class="overlay">
    <div id="data">
      <slot />
    </div>

    <div class="btns">
      <button
        id="choose-btn"
        on:click|preventDefault|stopPropagation={choose}
        disabled={disableChooseBtn}>Choose</button
      >
      <button id="close-btn" on:click|preventDefault|stopPropagation={close}
        >Close</button
      >
    </div>
  </div>
{/if}

<style>
  :root {
    overflow-y: overlay;
  }

  .overlay {
    position: absolute;
    width: 80%;
    min-height: 70%;
    left: 10%;
    background-color: #3e3e28;
    opacity: 98%;
    z-index: 2;
    cursor: pointer;
    border-radius: 1vw;
    cursor: default;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-top: 1vh;
  }

  .btns {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  #choose-btn:disabled:hover {
    background-color: gray;
    border-color: gray;
  }
</style>
