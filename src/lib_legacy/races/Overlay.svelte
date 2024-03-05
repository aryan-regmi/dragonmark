<script lang="ts">
  export let toggleOverlay: boolean;
  export let hasSubtype: boolean;
  export let subtypeChosen: boolean;
  export let chosen: string;

  function close() {
    toggleOverlay = !toggleOverlay;
  }

  function choose() {
    chosen = "Dragonborn";
    close();
  }

  let disabled = !(hasSubtype !== subtypeChosen);
</script>

{#if toggleOverlay}
  <div class="overlay">
    <div id="data">
      <slot />
    </div>
    <div class="btns">
      <button on:click|preventDefault|stopPropagation={choose} {disabled}
        >Choose</button
      >
      <button on:click|preventDefault|stopPropagation={close}>Close</button>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    width: 80%;
    left: 10%;
    background-color: #3e3e28;
    opacity: 98%;
    z-index: 2;
    cursor: pointer;
    border-radius: 1vw;
    cursor: default;
  }

  .btns {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  button:disabled {
    background-color: gray;
  }

  button:disabled:hover {
    border-color: gray;
  }
</style>
