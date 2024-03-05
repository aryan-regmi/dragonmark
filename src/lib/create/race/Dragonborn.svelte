<script lang="ts">
  import Overlay from "./Overlay.svelte";

  export let toggle: boolean;

  let display = "display: none";
  function sourceOptions() {
    if (display === "display: block") {
      display = "display: none";
    } else {
      display = "display: block";
    }
  }

  const summary =
    "\
            Born of dragons, as their name proclaims, the dragonborn walk\
            proudly through a world that greets them with fearful\
            incomprehension. Shaped by draconic gods or the dragons themselves,\
            dragonborn originally hatched from dragon eggs as a unique race,\
            combining the best attributes of dragons and humanoids. Some\
            dragonborn are faithful servants to true dragons, others form the\
            ranks of soldiers in great wars, and still others find themselves\
            adrift, with no clear calling in life.\
    ";
</script>

<Overlay bind:toggle>
  <div id="change-src">
    <button class="dropdown" id="change-src-btn" on:click={sourceOptions}
      >Change Source</button
    >
    <!-- <button class="dropdown-content" id="change-src-btn" style={display} -->
    <!--   >Source 1</button -->
    <!-- > -->
    <button class="dropdown-content" id="change-src-btn" style={display}
      >Source 2</button
    >
  </div>
  <div id="summary">
    {summary}
  </div>
</Overlay>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    /* position: absolute; */
    /* min-width: 160px; */
    /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
    z-index: 1;
    background-color: black;
    opacity: 80%;
  }

  #change-src {
    padding-bottom: 1vh;
  }

  #change-src-btn {
    width: 100%;
  }

  button:hover {
    color: white;
    border-color: white;
  }
</style>

