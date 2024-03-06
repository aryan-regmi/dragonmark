<script lang="ts">
  import Dropdown from "../Dropdown.svelte";

  export const hasSubtype = true;
  export let subtypeChosen = false;

  const sources = [
    "Player's Handbook",
    "Explorer's Guide to Wildemount",
    "Eberron: Rising from the Last War",
    "Spelljammer: Adventures in Space",
    "Plane Shift: Kaladesh",
    "Plane Shift: Zendikar",
    "Unearthed Arcana",
  ];
  let defaultSource = sources[0];
  let currSource: string;

  // Subtype from PHB
  let phbSubtype: string;
  $: if (phbSubtype !== "") {
    subtypeChosen = true;
  }

  // $: if (currSource === sources[1] || currSource === sources[2]) {
  //   subtypeChosen = true;
  // }
</script>

<h1 id="title">Elf</h1>

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
          Elves are a magical people of otherworldly grace, living in places of
          ethereal beauty, in the midst of ancient forests or in silvery spires
          glittering with faerie light, where soft music drifts through the air
          and gentle fragrances waft on the breeze. Elves love nature and magic,
          art and artistry, music and poetry.
        </strong>
      </em>
    </p>

    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Your Dexterity score increases by 2.
      </li>
      <li>
        <strong>Age:</strong>
        Although elves reach physical maturity at about the same age as humans, the
        elven understanding of adulthood goes beyond physical growth to encompass
        worldly experience. An elf typically claims adulthood and an adult name around
        the age of 100 and can live to be 750 years old.
      </li>
      <li>
        <strong>Alignment:</strong>
        Elves love freedom, variety, and self-expression, so they lean strongly towards
        the gentler aspects of chaos. They value and protect others' freedom as well
        as their own, and are good more often than not. Drow are an exception; their
        exile into the Underdark has made them vicious and dangerous. Drow are more
        often evil than not.
      </li>
      <li>
        <strong>Size:</strong>
        Elves range from under 5 to over 6 feet tall and have slender builds. Your
        size is Medium.
      </li>
      <li>
        <strong>Speed:</strong>
        Your base walking speed is 30 feet.
      </li>
      <li>
        <strong>Darkvision:</strong>
        Accustomed to twilit forests and the night sky, you have superior vision
        in dark and dim conditions. You can see in dim light within 60 feet of you
        as if it were bright light, and in darkness as if it were dim light. You
        can't discern color in darkness, only shades of gray.
      </li>
      <li>
        <strong>Fey Ancestry:</strong>
        You have advantage on saving throws against being charmed, and magic can't
        put you to sleep.
      </li>
      <li>
        <strong>Trance:</strong>
        Elves do not sleep. Instead they meditate deeply, remaining semi-conscious,
        for 4 hours a day. The Common word for this meditation is "trance." While
        meditating, you dream after a fashion; such dreams are actually mental exercises
        that have become reflexive after years of practice. After resting in this
        way, you gain the same benefit a human would from 8 hours of sleep.
      </li>
      <li>
        <strong>Keen Senses:</strong>
        You have proficiency in the Perception skill.
      </li>
      <li>
        <strong>Languages:</strong>
        You can speak, read, and write Common and Elven.
      </li>
    </ul>

    <h2>Dark Elf</h2>
    <p>
      <em>
        Descended from an earlier subrace of dark-skinned elves, the drow were
        banished from the surface world for following the goddess Lolth down the
        path to evil and corruption. Now they have built their own civilization
        in the depths of the Underdark, patterned after the Way of Lolth. Also
        called dark elves. The drow have black skin that resembles polished
        obsidian and stark white or pale yellow hair. They commonly have very
        pale eyes (so pale as to be mistaken for white) in shades of lilac,
        silver, pink, red, and blue. They lend to be smaller and thinner than
        most elves.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Charisma score increases by
        1.
      </li>
      <li>
        <strong>Superior Darkvision:</strong>
        Your darkvision has a range of 120 feet, instead of 60.
      </li>
      <li>
        <strong>Sunlight Sensitivity:</strong>
        You have disadvantage on attack rolls and Wisdom (Perception) checks that
        rely on sight when you, the target of the attack, or whatever you are trying
        to perceive is in direct sunlight.
      </li>
      <li>
        <!-- FIXME: Link to spells -->
        <strong>Drow Magic:</strong>
        You know the Dancing Lights cantrip. When you reach 3rd level, you can cast
        the Faerie Fire spell once with this trait and regain the ability to do so
        when you finish a long rest. When you reach 5th level, you can cast the Darkness
        spell once and regain the ability to do so when you finish a long rest. Charisma
        is your spellcasting ability for these spells.
      </li>
      <li>
        <strong>Drow Weapond Training:</strong>
        You have proficiency with rapiers, shortswords, and hand crossbows.
      </li>
    </ul>

    <h2>High Elf</h2>
    <p>
      <em>
        As a high elf, you have a keen mind and a mastery of at least the basics
        of magic. In many of the worlds of D&D, there are two kinds of high
        elves. One type (which includes the gray elves and valley elves of
        Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the
        Forgotten Realms) is haughty and reclusive, believing themselves to be
        superior to non-elves and even other elves. The other type (including
        the high elves of Greyhawk. the Qualinesti of Dragonlance, and the moon
        elves of the Forgotten Realms) are more common and more friendly, and
        often encountered among humans and other races.
        <br />
        The sun elves of Faerun (also called gold elves or sunrise elves) have bronze
        skin and hair of copper, black, or golden blood. Their eyes are golden, silver,
        or black. Moon elves (also called silver elves or gray elves) are much paler,
        with alabaster skin sometimes tinged with blue. They often have hair of silver-while,
        black, or blue, but various shades of blond, brown, and red are not uncommon.
        Their eyes are blue or green and flecked with gold.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong> Your Intelligence score increases
        by 1.
      </li>
      <!-- FIXME: Link to spell list -->
      <li>
        <strong>Cantrip:</strong>
        You know one cantrip of your choice from the Wizard spell list. Intelligence
        is your spellcasting ability for it.
      </li>
      <li>
        <strong>Elf Weapon Training:</strong>
        You have proficiency with the longsword, shortsword, shortbow, and longbow.
      </li>
      <li>
        <strong>Extra Language:</strong>
        You can read, speak, and write one additional language of your choice.
      </li>
    </ul>

    <Dropdown
      title="Select Subtype"
      dropdownOpts={["Dark Elf", "High Elf", "Wood Elf"]}
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
