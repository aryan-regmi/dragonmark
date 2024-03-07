<!-- FIXME: Write in style of `Elf.svelte` -->

<script lang="ts">
  import Dropdown from "../Dropdown.svelte";

  export const hasSubtype = true;
  export let subtypeChosen = false;

  const sources = [
    "Player's Handbook",
    "Eberron: Rising from the Last War",
    "Plane Shift: Kaladesh",
  ];
  let defaultSource = sources[0];
  let currSource: string;

  // Subtype from PHB
  let phbSubtype: string;
  $: if (phbSubtype !== "") {
    subtypeChosen = true;
  }

  $: if (currSource === sources[1] || currSource === sources[2]) {
    subtypeChosen = true;
  }
</script>

<h1 id="title">Dwarf</h1>

<Dropdown
  title="Select Source"
  dropdownOpts={sources}
  bind:currOpt={currSource}
  defaultOpt={defaultSource}
/>

<div id="content">
  {#if currSource === sources[0]}
    <p>
      <em
        ><strong>
          Kingdoms rich in ancient grandeur, halls carved into the roots of
          mountains, the echoing of picks and hammers in deep mines and blazing
          forges, a commitment to clan and tradition, and a burning hatred of
          goblins and orcs – these common threads unite all dwarves.
        </strong>
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Constitution score increases
        by 2.
      </li>
      <li>
        <strong>Age:</strong> Dwarves mature at the same rate as humans, but they're
        considered young until they reach the age of 50. On average, they live about
        350 years.
      </li>
      <li>
        <strong>Alignment:</strong> Most dwarves are lawful, believing firmly in
        the benefits of a well-ordered society. They tend toward good as well, with
        a strong sense of fair play and a belief that everyone deserves to share
        in the benefits of a just order.
      </li>
      <li>
        <strong>Size:</strong> Dwarves stand between 4 and 5 feet tall and average
        about 150 pounds. Your size is Medium.
      </li>
      <li>
        <strong>Speed:</strong> Your base walking speed is 25 feet. Your speed is
        not reduced by wearing heavy armor.
      </li>
      <li>
        <strong>Darkvision:</strong> Accustomed to life underground, you have superior
        vision in dark and dim conditions. You can see in dim light within 60 feet
        of you as if it were bright light, and in darkness as if it were dim light.
        You can't discern color in darkness, only shades of gray.
      </li>
      <li>
        <strong>Dwarven Resilience:</strong> You have advantage on saving throws
        against poison, and you have resistance against poison damage.
      </li>
      <li>
        <strong>Dwarven Combat Training:</strong> You have proficiency with the battleaxe,
        handaxe, light hammer, and warhammer.
      </li>
      <li>
        <strong>Tool Proficiency:</strong> You gain proficiency with the artisan's
        tools of your choice: smith's tools, brewer's supplies, or mason's tools.
      </li>
      <li>
        <strong>Stonecunning:</strong> Whenever you make an Intelligence (History)
        check related to the origin of stonework, you are considered proficient in
        the History skill and add double your proficiency bonus to the check, instead
        of your normal proficiency bonus.
      </li>
      <li>
        <strong>Languages:</strong> You can speak, read, and write Common and Dwarvish.
        Dwarvish is full of hard consonants and guttural sounds, and those characteristics
        spill over into whatever other language a dwarf might speak.
      </li>
    </ul>

    <h2>Hill Dwarf</h2>
    <p>
      <em>
        As a hill dwarf, you have keen senses, deep intuition, and remarkable
        resilience. The gold dwarves of Faerun in their mighty southern kingdom
        are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn
        in the Dragonlance setting.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Wisdom score increases by 1.
      </li>
      <li>
        <strong>Dwarven Toughness:</strong> Your hit point maximum increases by 1,
        and it increases by 1 every time you gain a level.
      </li>
    </ul>

    <h2>Mountain Dwarf</h2>
    <p>
      <em>
        As a mountain dwarf, you're strong and hardy, accustomed to a difficult
        life in rugged terrain. You're probably on the tall side (for a dwarf),
        and tend toward lighter coloration, The shield dwarves of northern
        Faerun, as well as the ruling Hylar clan and the noble Daewar c1an of
        Dragonlance, are mountain dwarves.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Strength score increases by
        2.
      </li>
      <li>
        <strong>Dwarven Armor Training:</strong>
        You have proficiency with light and medium armor.
      </li>
    </ul>

    <Dropdown
      title="Select Subtype"
      dropdownOpts={["Hill Dwarf", "Mountain Dwarf"]}
      bind:currOpt={phbSubtype}
    />
  {:else if currSource === sources[1]}
    <p>
      <em
        ><strong>
          Kingdoms rich in ancient grandeur, halls carved into the roots of
          mountains, the echoing of picks and hammers in deep mines and blazing
          forges, a commitment to clan and tradition, and a burning hatred of
          goblins and orcs – these common threads unite all dwarves.
        </strong>
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Constitution score increases
        by 2.
      </li>
      <li>
        <strong>Age:</strong> Dwarves mature at the same rate as humans, but they're
        considered young until they reach the age of 50. On average, they live about
        350 years.
      </li>
      <li>
        <strong>Alignment:</strong> Most dwarves are lawful, believing firmly in
        the benefits of a well-ordered society. They tend toward good as well, with
        a strong sense of fair play and a belief that everyone deserves to share
        in the benefits of a just order.
      </li>
      <li>
        <strong>Size:</strong> Dwarves stand between 4 and 5 feet tall and average
        about 150 pounds. Your size is Medium.
      </li>
      <li>
        <strong>Speed:</strong> Your base walking speed is 25 feet. Your speed is
        not reduced by wearing heavy armor.
      </li>
      <li>
        <strong>Darkvision:</strong> Accustomed to life underground, you have superior
        vision in dark and dim conditions. You can see in dim light within 60 feet
        of you as if it were bright light, and in darkness as if it were dim light.
        You can't discern color in darkness, only shades of gray.
      </li>
      <li>
        <strong>Dwarven Resilience:</strong> You have advantage on saving throws
        against poison, and you have resistance against poison damage.
      </li>
      <li>
        <strong>Dwarven Combat Training:</strong> You have proficiency with the battleaxe,
        handaxe, light hammer, and warhammer.
      </li>
      <li>
        <strong>Tool Proficiency:</strong> You gain proficiency with the artisan's
        tools of your choice: smith's tools, brewer's supplies, or mason's tools.
      </li>
      <li>
        <strong>Stonecunning:</strong> Whenever you make an Intelligence (History)
        check related to the origin of stonework, you are considered proficient in
        the History skill and add double your proficiency bonus to the check, instead
        of your normal proficiency bonus.
      </li>
      <li>
        <strong>Languages:</strong> You can speak, read, and write Common and Dwarvish.
        Dwarvish is full of hard consonants and guttural sounds, and those characteristics
        spill over into whatever other language a dwarf might speak.
      </li>
    </ul>

    <h2>Mark of Warding</h2>
    <p>
      <em>
        If you're a dwarf with the Mark of Warding, you have this subrace, with
        the following traits.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Intelligence score increases
        by 1.
      </li>
      <li>
        <strong>Warder's Intuition:</strong> Whenever you make an Intelligence (Investigation)
        check or an Ability Check involving Thieves' Tools, you can roll a d4 and
        add the number rolled to the total ability check.
      </li>
      <li>
        <strong>Wards and Seals:</strong>
        You can cast the Alarm and Mage Armor spells with this trait. Starting at
        3rd level, you can also cast the Arcane Lock spell with it. Once you cast
        either spell with this trait, you can't cast that spell again until you finish
        a Long Rest. Intelligence is your Spellcasting Ability for these spells,
        and you don't require material components when you cast them with this trait.
      </li>
      <li>
        <strong>Spells of the Mark:</strong>
        If you have the Spellcasting or Pact Magic class feature, the spells on the
        Mark of Warding Spells table are added to the spell list of your Spellcasting
        class.
      </li>
    </ul>

    <!-- FIXME: Add overlay for spells!! -->
    <table id="spells">
      <tr>
        <th>Spell Level</th>
        <th>Spell</th>
      </tr>
      <tr>
        <td>1st</td>
        <td>
          <span class="spell">Alarm</span>,
          <span class="spell">Armor of Agathys</span>
        </td>
      </tr>
      <tr>
        <td>2nd</td>
        <td>
          <span class="spell">Arcane Lock</span>,
          <span class="spell">Knock</span>
        </td>
      </tr>
      <tr>
        <td>3rd</td>
        <td>
          <span class="spell">Glyph of Warding</span>,
          <span class="spell">Magic Circle</span>
        </td>
      </tr>
      <tr>
        <td>4th</td>
        <td>
          <span class="spell">Leomund's Secret Chest</span>,
          <span class="spell">Mordenkainen Faithful Hound</span>
        </td>
      </tr>
      <tr>
        <td>5th</td>
        <span class="spell">Antilife Shell</span>
      </tr>
    </table>
  {:else if currSource === sources[2]}
    <p>
      <em
        ><strong>
          Dwarves don’t understand laziness or shortcuts. Just as a machine must
          function smoothly at all times, so too an artisan should work steadily
          and with care. Dwarves take pride in their work ethic, and abhor any
          attitude or behavior that would undermine the quality of their work.
          They are more thorough than speedy, and although a dwarf’s work might
          take longer to complete, its quality makes the time worthwhile. If a
          job must be done, a dwarf will see that it is done correctly. And when
          a dwarf repairs a machine, it will work as well as it did when it was
          first built, if not better — and it will last.
        </strong>
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Your Constitution score increases by 2, and your Wisdom score increases by
        1.
      </li>
      <li>
        <strong>Age:</strong> Dwarves mature at the same rate as humans, but they're
        considered young until they reach the age of 50. On average, they live about
        350 years.
      </li>
      <li>
        <strong>Alignment:</strong> Most dwarves are lawful, believing firmly in
        the benefits of a well-ordered society. They tend toward good as well, with
        a strong sense of fair play and a belief that everyone deserves to share
        in the benefits of a just order.
      </li>
      <li>
        <strong>Size:</strong>
        Dwarves stand around 5 feet tall and average about 150 pounds. Your size
        is Medium.
      </li>
      <li>
        <strong>Speed:</strong>
        Your base walking speed is 25 feet. Your speed is not reduced by wearing
        heavy armor.
      </li>
      <li>
        <strong>Darkvision:</strong> Accustomed to life underground in your race’s
        ancient past, you have superior vision in dark and dim conditions. You can
        see in dim light within 60 feet of you as if it were bright light, and in
        darkness as if it were dim light. You can’t discern color in darkness, only
        shades of gray.
      </li>
      <li>
        <strong>Dwarven Resilience:</strong>
        You have advantage on saving throws against poison, and you have resistance
        against poison damage.
      </li>
      <li>
        <strong>Dwarven Toughness:</strong>
        Your hit point maximum increases by 1, and it increases by 1 every time you
        gain a level.
      </li>
      <li>
        <strong>Artisan's Expertise:</strong>
        You gain proficiency with two kinds of artisan’s tools of your choice. Your
        proficiency bonus is doubled for any ability check you make that uses either
        of the chosen proficiencies. In addition, whenever you make an Intelligence
        (History) check related to the origin of any architectural construction (including
        buildings, public works such as canals and aqueducts, and the massive cogwork
        that underlies much of the construction of Ghirapur), you are considered
        proficient in the History skill and add double your proficiency bonus to
        the check, instead of your normal proficiency bonus.
      </li>
      <li>
        <strong>Stonecunning:</strong> Whenever you make an Intelligence (History)
        check related to the origin of stonework, you are considered proficient in
        the History skill and add double your proficiency bonus to the check, instead
        of your normal proficiency bonus.
      </li>
      <li>
        <strong>Languages:</strong>
        You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard
        consonants and guttural sounds, and those characteristics spill over into
        whatever other language a dwarf might
      </li>
    </ul>
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

  .spell:hover {
    color: #ff6699;
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
