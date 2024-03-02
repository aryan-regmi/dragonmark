<script lang="ts">
  export let toggleOverlay: boolean;
  function close() {
    toggleOverlay = !toggleOverlay;
  }

  export let chosen = "";
  function choose() {
    chosen = "Dwarf";
    close();
  }
</script>

{#if toggleOverlay}
  <div class="overlay">
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
    sint consectetur cupidatat.
    <div>
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
    background-color: black;
    opacity: 95%;
    z-index: 2;
    cursor: pointer;
    overflow-y: scroll;
  }
</style>
