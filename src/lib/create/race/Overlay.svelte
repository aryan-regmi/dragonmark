<script lang="ts">
  export let toggle: boolean;

  function close() {
    toggle = !toggle;
  }
</script>

{#if toggle}
  <div class="overlay">
    <div id="data">
      <slot />
    </div>

    <div class="btns">
      <button id="btn" on:click|preventDefault|stopPropagation={close}
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
</style>
