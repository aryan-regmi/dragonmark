<script lang="ts">
  import Overlay from "./Overlay.svelte";

  export let toggleOverlay: boolean;
  export let chosen = "";
</script>

<Overlay bind:toggleOverlay bind:chosen>
  <div id="overlay">
    <div>
      <h2>Dragonborn</h2>
      <p id="summary">
        <strong
          ><em>
            Born of dragons, as their name proclaims, the dragonborn walk
            proudly through a world that greets them with fearful
            incomprehension. Shaped by draconic gods or the dragons themselves,
            dragonborn originally hatched from dragon eggs as a unique race,
            combining the best attributes of dragons and humanoids. Some
            dragonborn are faithful servants to true dragons, others form the
            ranks of soldiers in great wars, and still others find themselves
            adrift, with no clear calling in life.
          </em>
        </strong>
      </p>
    </div>

    <div class="info-item">
      <strong>Ability Score Increase.</strong> Your Strength score increases by 2,
      and your Charisma score increases by 1.
    </div>

    <div class="info-item">
      <strong>Age.</strong> Young dragonborn grow quickly. They walk hours after
      hatching, attain the size and development of a 10-year-old human child by the
      age of 3, and reach adulthood by 15. They live to be around 80.
    </div>
  </div>
</Overlay>

<style>
  #overlay {
    display: grid;
    border-radius: 1vw;
    margin-left: 10%;
    margin-right: 10%;
    padding: 1vh;
    background-color: #1f1f14;
    justify-content: left;
  }

  #summary {
    font-size: 16px;
    padding-bottom: 1vh;
  }

  .info-item {
    padding-bottom: 1vh;
  }
</style>
