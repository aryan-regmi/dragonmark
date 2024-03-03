<script lang="ts">
  import Overlay from "./Overlay.svelte";

  export let toggleOverlay: boolean;
  export let chosen: string;
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

    <ul>
      <li>
        <strong>Ability Score Increase.</strong> Your Strength score increases by
        2, and your Charisma score increases by 1.
      </li>
      <li>
        <strong>Age.</strong> Young dragonborn grow quickly. They walk hours after
        hatching, attain the size and development of a 10-year-old human child by
        the age of 3, and reach adulthood by 15. They live to be around 80.
      </li>
      <li>
        <strong>Alignment.</strong> Dragonborn tend towards extremes, making a conscious
        choice for one side or the other between Good and Evil (represented by Bahamut
        and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon
        followers are mostly kobolds), but villainous dragonborn can be quite terrible
        indeed. Some rare few choose to devote themselves to lesser dragon deities,
        such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold
        Dragon, who is all alignments at once.
      </li>
      <li>
        <strong>Size.</strong>
        Dragonborn are taller and heavier than humans, standing well over 6 feet
        tall and averaging almost 250 pounds. Your size is Medium.
      </li>
      <li>
        <strong>Speed</strong>
        Your base walking speed is 30 feet.
      </li>
      <li>
        <strong>Draconic Ancestry</strong>
        You are distantly related to a particular kind of dragon. Choose a type of
        dragon from the below list; this determines the damage and area of your breath
        weapon, and the type of resistance you gain.
      </li>
    </ul>

    <table>
      <tr id="table-header">
        <th>Dragon Color</th>
        <th>Damage Type</th>
        <th>Breath Weapon</th>
      </tr>
      <tr>
        <td>Black</td>
        <td>Acid</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td>Lightning</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Brass</td>
        <td>Fire</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Bronze</td>
        <td>Lightning</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Acid</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Gold</td>
        <td>Fire</td>
        <td>15ft Cone (DEX save)</td>
      </tr>
      <tr>
        <td>Green</td>
        <td>Poison</td>
        <td>15ft Cone (CON save)</td>
      </tr>
      <tr>
        <td>Red</td>
        <td>Fire</td>
        <td>15ft Cone (DEX save)</td>
      </tr>
      <tr>
        <td>Silver</td>
        <td>Cold</td>
        <td>15ft Cone (CON save)</td>
      </tr>
      <tr>
        <td>White</td>
        <td>Cold</td>
        <td>15ft Cone (CON save)</td>
      </tr>
    </table>
  </div>
</Overlay>

<style>
  #overlay {
    display: grid;
    border-radius: 1vw;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2vh;
    padding: 1vh;
    background-color: #1f1f14;
    justify-content: left;
    overflow-y: scroll;
    overflow-inline: scroll;
  }

  #summary {
    font-size: 16px;
    padding-bottom: 0.5vh;
  }

  #table-header {
    background-color: #3e3e28;
  }

  ul {
    list-style-type: disc;
  }

  li {
    padding-bottom: 1vh;
    text-align: left;
  }

  li::marker {
    font-size: 1vw;
  }

  table {
    border: 1px solid;
    border-collapse: collapse;
  }

  th {
    border: 1px solid;
    font-size: 20px;
    padding-bottom: 0.5vh;
  }

  td {
    border: 1px solid;
    padding-bottom: 0.5vh;
  }
</style>
