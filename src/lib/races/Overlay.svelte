<script lang="ts">
  export let toggleOverlay: boolean;
  function close() {
    toggleOverlay = !toggleOverlay;
  }

  export let chosen: string;
  function choose() {
    chosen = "Dragonborn";
    close();
  }
</script>

{#if toggleOverlay}
  <div class="overlay">
    <div>
      <slot />
    </div>
    <div class="btns">
      <button on:click|preventDefault|stopPropagation={choose}>Choose</button>
      <button on:click|preventDefault|stopPropagation={close}>Close</button>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    display: block;
    width: 80%;
    height: 100%;
    left: 10%;
    background-color: #3e3e28;
    opacity: 98%;
    z-index: 2;
    cursor: pointer;
    overflow-y: scroll;
    border-radius: 1vw;
    cursor: pointer;
  }

  .btns {
    padding-top: 3vh;
  }
</style>
