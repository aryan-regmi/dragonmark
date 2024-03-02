<script lang="ts">
  export let toggleOverlay: boolean;
  function close() {
    toggleOverlay = !toggleOverlay;
  }
</script>

{#if toggleOverlay}
  <div class="overlay">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit tenetur
    quia ratione eligendi odio dicta labore quo magni facilis nostrum, non totam
    vel accusamus eos deleniti omnis eius laboriosam officia!
    <button on:click|preventDefault|stopPropagation={close}>Close</button>
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
