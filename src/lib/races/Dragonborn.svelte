<script lang="ts">
  import Overlay from "./Overlay.svelte";

  export let toggleOverlay: boolean;
  export let chosen = "";
</script>

<Overlay bind:toggleOverlay bind:chosen>
  <div>
    <h2>Dragonborn</h2>
    <p id="summary">
      <strong>
        Born of dragons, as their name proclaims, the dragonborn walk proudly
        through a world that greets them with fearful incomprehension. Shaped by
        draconic gods or the dragons themselves, dragonborn originally hatched
        from dragon eggs as a unique race, combining the best attributes of
        dragons and humanoids. Some dragonborn are faithful servants to true
        dragons, others form the ranks of soldiers in great wars, and still
        others find themselves adrift, with no clear calling in life.
      </strong>
    </p>
  </div>
  <ul>
    <li>
      <strong>Ability Score Increase.</strong> Your Strength score increases by 2,
      and your Charisma score increases by 1.
    </li>
  </ul>
</Overlay>

<style>
  #summary {
    padding-left: 2vw;
    padding-right: 2vw;
    font-size: 16px;
  }
</style>
