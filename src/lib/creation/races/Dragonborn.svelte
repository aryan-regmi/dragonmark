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
  let defaultSource = sources[3];
  let currSource: string;

  // Disables `Choose` btn if source is switched
  $: changedSource = currSource !== defaultSource;
  $: if (changedSource) {
    subtypeChosen = false;
  }

  // Subtype from PHB
  let phbSubtype: string;
  $: if (phbSubtype !== "") {
    subtypeChosen = true;
  }

  // Subtype from Wildemount
  let wildemountSubtype: string;
  $: if (wildemountSubtype !== "") {
    subtypeChosen = true;
  }

  // Subtype from Fizban
  let fizbanSubtype: string;
  $: if (fizbanSubtype !== "") {
    subtypeChosen = true;
  }
</script>

<h1 id="title">Dragonborn</h1>

<Dropdown
  title="Select Source"
  dropdownOpts={sources}
  bind:currOpt={currSource}
  defaultOpt={defaultSource}
/>

<div id="content">
  <p>
    <em
      ><strong>
        Born of dragons, as their name proclaims, the dragonborn walk proudly
        through a world that greets them with fearful incomprehension. Shaped by
        draconic gods or the dragons themselves, dragonborn originally hatched
        from dragon eggs as a unique race, combining the best attributes of
        dragons and humanoids. Some dragonborn are faithful servants to true
        dragons, others form the ranks of soldiers in great wars, and still
        others find themselves adrift, with no clear calling in life.
      </strong>
    </em>
  </p>

  {#if currSource === sources[0]}
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Strength score increases by
        2, and your Charisma score increases by 1.
      </li>
      <li>
        <strong>Age:</strong> Young dragonborn grow quickly. They walk hours after
        hatching, attain the size and development of a 10-year-old human child by
        the age of 3, and reach adulthood by 15. They live to be around 80.
      </li>
      <li>
        <strong>Alignment:</strong> Dragonborn tend towards extremes, making a conscious
        choice for one side or the other between Good and Evil (represented by Bahamut
        and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon
        followers are mostly kobolds), but villainous dragonborn can be quite terrible
        indeed. Some rare few choose to devote themselves to lesser dragon deities,
        such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold
        Dragon, who is all alignments at once.
      </li>
      <li>
        <strong>Size:</strong> Dragonborn are taller and heavier than humans, standing
        well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.
      </li>
      <li>
        <strong>Speed:</strong> Your base walking speed is 30 feet.
      </li>
      <li>
        <strong>Draconic Ancestry:</strong> You are distantly related to a particular
        kind of dragon. Choose a type of dragon from the below list; this determines
        the damage and area of your breath weapon, and the type of resistance you
        gain.
      </li>
    </ul>

    <table id="dragon-breath">
      <tr>
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

    <ul class="info">
      <li>
        <strong>Breath Weapon:</strong> You can use your action to exhale destructive
        energy. It deals damage in an area according to your ancestry. When you use
        your breath weapon, all creatures in the area must make a saving throw, the
        type of which is determined by your ancestry. The DC of this saving throw
        is 8 + your Constitution modifier + your proficiency bonus. A creature takes
        2d6 damage on a failed save, and half as much damage on a successful one.
        The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level.
        After using your breath weapon, you cannot use it again until you complete
        a short or long rest. Instead, you may use your breath weapon a number of
        times equal to your Constitution modifier. You regain expended uses on a
        short or long rest.
      </li>
      <li>
        <strong>Damage Resistance:</strong>
        You have resistance to the damage type associated with your ancestry.
      </li>
      <li>
        <strong>Languages:</strong> You can read, speak, and write Common and Draconic.
      </li>
    </ul>

    <Dropdown
      title="Select Draconic Ancestry"
      dropdownOpts={[
        "Black",
        "Blue",
        "Brass",
        "Bronze",
        "Copper",
        "Gold",
        "Green",
        "Red",
        "Silver",
        "White",
      ]}
      bind:currOpt={phbSubtype}
    />
  {:else if currSource === sources[1]}
    <h2>Draconblood</h2>
    <p>
      <em>
        Draconbloods possess long tails and a knack for social manipulation.
        They remember the days when they were once mighty conquerors. A
        draconblood uses the dragonborn traits in the Player's Handbook, with
        the following traits replacing the Ability Score Increase and Damage
        Resistance traits.
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Intelligence score increases
        by 2, and your Charisma score increases by 1.
      </li>
      <li>
        <strong>Darkvision:</strong>
        You can see in dim light within 60 feet of you as if it were bright light,
        and in darkness as if it were dim light. You can't discern color in darkness,
        only shades of gray.
      </li>
      <li>
        <strong>Forceful Presence:</strong> When you make a Intimidation or Persuasion
        check, you can do so with advantage once per long rest.
      </li>
    </ul>

    <h2>Ravenite</h2>
    <p>
      <em>
        Ravenites have no tails and a hearty physique. They remember the days
        when they were slaves to the draconblood, as well as the day when they
        overthrew their masters. A ravenite uses the dragonborn traits in the
        Player's Handbook, with the following traits replacing the Ability Score
        Increase and Damage Resistance traits.
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Strength score increases by
        2, and your Constitution score increases by 1.
      </li>
      <li>
        <strong>Darkvision:</strong>
        You can see in dim light within 60 feet of you as if it were bright light,
        and in darkness as if it were dim light. You can't discern color in darkness,
        only shades of gray.
      </li>
      <li>
        <strong>Vengeful Assault:</strong> When you take damage from a creature in
        range of a weapon you are wielding, you can use your reaction to make an
        attack against that creature. You can do this once per short or long rest.
      </li>
    </ul>

    <Dropdown
      title="Select Source"
      dropdownOpts={["Draconblood", "Ravenite"]}
      bind:currOpt={wildemountSubtype}
    />
  {:else if currSource === sources[2]}
    <h2>Chromatic</h2>
    <p>
      <em>
        Dragonborn with chromatic ancestry claim the raw elemental power of
        chromatic dragons. The vibrant colors of black, blue, green, red, and
        white dragons gleam in those dragonborn's scaled skin and in the deadly
        energy of their breath weapons. Theirs is the raw elemental fury of the
        volcano, of biting arctic winds, and of raging lightning storms, as well
        as the subtle whisper of swamp and forest, toxic and corrosive.
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Increase one ability score by 2
        and increase a different one by 1, or you increase three different scores
        by 1.
      </li>
      <li>
        <strong>Type:</strong>
        You are a Humanoid.
      </li>
      <li>
        <strong>Size:</strong> You are Medium.
      </li>
      <li>
        <strong>Speed:</strong>
        Your walking speed is 30 feet.
      </li>
      <li>
        <strong>Chromatic Ancestry:</strong>
        You trace your ancestry to a chromatic dragon, granting you a special magical
        affinity. Choose one type of dragon from the Chromatic Ancestry table. This
        determines the damage type for your other traits as shown in the table.
      </li>
    </ul>

    <table id="dragon-breath">
      <tr>
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
        <td>Green</td>
        <td>Poison</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>Red</td>
        <td>Fire</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
      <tr>
        <td>White</td>
        <td>Cold</td>
        <td>5ft x 30ft Line (DEX save)</td>
      </tr>
    </table>

    <h2>Metallic</h2>
    <p>
      <em>
        Dragonborn with metallic ancestry lay claim to the tenacity of metallic
        dragons — brass, bronze, copper, gold, and silver — whose hues glint in
        their scales. Theirs is the fire of hearth and forge, the cold of high
        mountain air, the spark of inspiration, and the scouring touch of acid
        that purifies.
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Increase one ability score by 2
        and increase a different one by 1, or you increase three different scores
        by 1.
      </li>
      <li>
        <strong>Type:</strong>
        You are a Humanoid.
      </li>
      <li>
        <strong>Size:</strong> You are Medium.
      </li>
      <li>
        <strong>Speed:</strong>
        Your walking speed is 30 feet.
      </li>
      <li>
        <strong>Metallic Ancestry:</strong>
        You trace your ancestry to a metallic dragon, granting you a special magical
        affinity. Choose one type of dragon from the Metallic Ancestry table. This
        determines the damage type for your other traits as shown in the table.
      </li>
    </ul>

    <table id="dragon-breath">
      <tr>
        <th>Dragon Color</th>
        <th>Damage Type</th>
        <th>Breath Weapon</th>
      </tr>
      <tr>
        <td>Brass</td>
        <td>Fire</td>
        <td>15ft Cone (CON save)</td>
      </tr>
      <tr>
        <td>Bronze</td>
        <td>Lightning</td>
        <td>15ft Cone (CON save)</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Acid</td>
        <td>15ft Cone (DEX save)</td>
      </tr>
      <tr>
        <td>Gold</td>
        <td>Fire</td>
        <td>15ft Cone (DEX save)</td>
      </tr>
      <tr>
        <td>Silver</td>
        <td>Cold</td>
        <td>15ft Cone (DEX save)</td>
      </tr>
    </table>

    <Dropdown
      title="Select Draconic Ancestry"
      dropdownOpts={[
        "Chromatic - Black",
        "Chromatic - Blue",
        "Chromatic - Green",
        "Chromatic - Red",
        "Chromatic - White",
        "Metallic - Brass",
        "Metallic - Bronze",
        "Metallic - Copper",
        "Metallic - Gold",
        "Metallic - Silver",
      ]}
      bind:currOpt={fizbanSubtype}
    />
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

  .info {
    list-style-type: disc;
  }

  table {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    margin-bottom: 2vh;
    margin-top: 2vh;
  }

  th {
    background-color: rgba(51, 51, 0, 0.9);
  }

  table,
  th,
  td {
    border: 0.2vw solid;
    border-color: white;
    border-collapse: collapse;
  }

  li {
    margin-bottom: 1vh;
    text-align: left;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 1vw;
    padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  }
</style>
