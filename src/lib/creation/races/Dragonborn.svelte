<script lang="ts">
  import Dropdown from "../Dropdown.svelte";

  export const hasSubtype = true;
  export let subtypeChosen = false;

  const sources = [
    "Player's Handbook",
    "Explorer's Guide to Wildemount",
    "Fizban's Treasury of Dragons",
    "Unearthed Arcana",
  ];
  let currSource = sources[0];
</script>

<h1 id="title">Dragonborn</h1>

<Dropdown
  title="Select Source"
  dropdownOpts={sources}
  bind:currOpt={currSource}
/>

<div id="content">
  <p>
    <em>
      Born of dragons, as their name proclaims, the dragonborn walk proudly
      through a world that greets them with fearful incomprehension. Shaped by
      draconic gods or the dragons themselves, dragonborn originally hatched
      from dragon eggs as a unique race, combining the best attributes of
      dragons and humanoids. Some dragonborn are faithful servants to true
      dragons, others form the ranks of soldiers in great wars, and still others
      find themselves adrift, with no clear calling in life.
    </em>
  </p>

  {#if currSource === sources[0]}
    <ul id="info">
      <li>
        <span>
          <strong>Ability Score Increase:</strong> Your Strength score increases
          by 2, and your Charisma score increases by 1.
        </span>
      </li>
      <li>
        <span>
          <strong>Age:</strong> Young dragonborn grow quickly. They walk hours after
          hatching, attain the size and development of a 10-year-old human child
          by the age of 3, and reach adulthood by 15. They live to be around 80.
        </span>
      </li>
      <li>
        <span>
          <strong>Alignment:</strong> Dragonborn tend towards extremes, making a
          conscious choice for one side or the other between Good and Evil (represented
          by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat
          (whose non-dragon followers are mostly kobolds), but villainous dragonborn
          can be quite terrible indeed. Some rare few choose to devote themselves
          to lesser dragon deities, such as Chronepsis (Neutral), and fewer still
          choose to worship Io, the Ninefold Dragon, who is all alignments at once.
        </span>
      </li>
    </ul>
  {:else if currSource === sources[1]}
    WILDEMOUNT
  {:else if currSource === sources[2]}
    FIZBAN
  {:else if currSource === sources[3]}
    UA
  {/if}
</div>

<style>
  #title {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1vh;
    border-radius: 1vh;
  }

  #content {
    padding: 1vh;
    color: white;
  }

  #info {
    list-style-type: disc;
  }

  li {
    padding-bottom: 1vh;
    text-align: left;
  }
</style>

