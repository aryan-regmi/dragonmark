<script lang="ts">
  import Overlay from "./Overlay.svelte";

  export let toggle: boolean;
  export let chosen: string = ""; // TODO: Add button for this!

  type SourceType = { [index: string]: string };
  let sources: SourceType = {
    phb: "Player's Handbook",
    wildemount: "Explorer's Guide to Wildemount",
    fizban: "Fizban's Treasury of Dragons",
    ua: "Unearthed Arcana",
  };
  let currentSource = sources["phb"];

  let sourceBtnDisplay = "display: none";
  function sourceOptions() {
    if (sourceBtnDisplay === "display: block") {
      sourceBtnDisplay = "display: none";
    } else {
      sourceBtnDisplay = "display: block";
    }
  }

  function changeSource(this: any) {
    currentSource = sources[this.id];
    sourceOptions();
  }
</script>

<Overlay bind:toggle>
  <div id="change-src">
    <button class="dropdown" id="change-src-btn" on:click={sourceOptions}
      >Change Source: {currentSource}</button
    >
    {#each Object.entries(sources) as [key, src]}
      <button
        class="dropdown-content"
        style={sourceBtnDisplay}
        id={key}
        on:click={changeSource}>{src}</button
      >
    {/each}
  </div>

  <div id="contents">
    {#if currentSource === sources["phb"]}
      <!-- TODO: Impl -->
    {:else if currentSource === sources["wildemount"]}
      <!-- TODO: Impl -->
    {:else if currentSource === sources["fizban"]}
      <!-- TODO: Impl -->
    {:else if currentSource === sources["ua"]}
      <!-- TODO: Impl -->
    {/if}
  </div>
</Overlay>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
  }

  .dropdown-content {
    z-index: 1;
    opacity: 90%;
    width: 100%;
  }

  #change-src {
    padding-bottom: 1vh;
  }

  #change-src-btn {
    width: 100%;
    background-color: black;
    opacity: 80%;
  }

  button:hover {
    color: white;
    border-color: white;
  }
</style>

