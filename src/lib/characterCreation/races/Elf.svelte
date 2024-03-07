<script lang="ts">
  import Dropdown from "../Dropdown.svelte";

  export const hasSubtype = true;
  export let subtypeChosen = false;

  const summary =
    "Elves are a magical people of otherworldly grace, living in places of\
          ethereal beauty, in the midst of ancient forests or in silvery spires\
          glittering with faerie light, where soft music drifts through the air\
          and gentle fragrances waft on the breeze. Elves love nature and magic,\
          art and artistry, music and poetry.";

  const baseInfo: { [index: string]: string } = {
    "Ability Score Increase": "Your Dexterity score increases by 2.",
    Age: "Although elves reach physical maturity at about the same age as humans,\
      the elven understanding of adulthood goes beyond physical growth to encompass\
      worldly experience. An elf typically claims adulthood and an adult name around\
      the age of 100 and can live to be 750 years old.",
    Alignment:
      "Elves love freedom, variety, and self-expression, so they lean strongly\
      towards the gentler aspects of chaos. They value and protect others' freedom\
      as well as their own, and are good more often than not. Drow are an exception;\
      their exile into the Underdark has made them vicious and dangerous. Drow are \
      more often evil than not.",
    Size: "Elves range from under 5 to over 6 feet tall and have slender builds. \
      Your size is Medium.",
    Speed: "Your base walking speed is 30ft",
    Darkvision:
      "Accustomed to twilit forests and the night sky, you have superior\
      vision in dark and dim conditions. You can see in dim light within 60 feet of you\
      as if it were bright light, and in darkness as if it were dim light. You can't \
      discern color in darkness, only shades of gray.",
    "Fey Ancestry":
      "You have advantage on saving throws against being charmed, and magic can't \
      put you to sleep.",
    Trance:
      'Elves do not sleep. Instead they meditate deeply, remaining \
      semi-conscious, for 4 hours a day. The Common word for this meditation\
      is "trance." While meditating, you dream after a fashion; such dreams are\
      actually mental exercises that have become reflexive after years of practice.\
      After resting in this way, you gain the same benefit a human would from 8 \
      hours of sleep.',
    "Keen Senses": "You have proficiency in the Perception skill.",
    Languages: "You can speak, read, and write Common and Elven.",
  };

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

  $: if (
    currSource === sources[1] ||
    currSource === sources[2] ||
    currSource === sources[3]
  ) {
    subtypeChosen = true;
  }
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
    <!-- Player's Handbook -->

    <p>
      <em><strong>{summary}</strong></em>
    </p>

    <ul class="info">
      {#each Object.entries(baseInfo) as [section, desc]}
        <li><strong>{section}: </strong>{desc}</li>
      {/each}
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

    <h2>Wood Elf</h2>
    <p>
      <em>
        As a wood elf, you have keen senses and intuition, and your fleet feet
        carry you quickly and stealthily through your native forests. This
        category includes the wild elves (grugach) of Greyhawk and the Kagonesti
        of Dragonlance, as well as the races called wood elves in Greyhawk and
        the Forgotten Realms. In Faerun, wood elves (also called wild elves.
        green elves, or forest elves) are reclusive and distrusting of
        non-elves.
        <br />
        Wood elves' skin tends to be copperish in hue, sometimes with traces of green.
        Their hair tends toward browns and blacks, but it is occasionally blond or
        copper-colored. Their eyes are green, brown, or hazel.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Your Wisdom score increases by 1.
      </li>
      <li>
        <strong>Elf Weapon Training:</strong>
        You have proficiency with the longsword, shortsword, shortbow, and longbow.
      </li>
      <li>
        <strong>Fleet of Foot:</strong>
        Your base walking speed increases to 35 feet.
      </li>
      <li>
        <strong>Mask of the Wild:</strong>
        You can attempt to hide even when you are only lightly obscured by foliage,
        heavy rain, falling snow, mist, and other natural phenomena.
      </li>
    </ul>

    <Dropdown
      title="Select Subtype"
      dropdownOpts={["Dark Elf", "High Elf", "Wood Elf"]}
      bind:currOpt={phbSubtype}
    />
  {:else if currSource === sources[1]}
    <!-- Explorer's Guide to Wildemount -->

    <p>
      <em><strong>{summary}</strong></em>
    </p>

    <ul class="info">
      {#each Object.entries(baseInfo) as [section, desc]}
        <li><strong>{section}: </strong>{desc}</li>
      {/each}
    </ul>

    <h2>Pallid Elf</h2>
    <p>
      <em>
        The pallid elves are a mystical and insightful people with skin as pale
        as the surface of Exandria's largest moon. They emerged from the Pallid
        Grove this century and wander the world with childlike curiosity.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Your Wisdom score increases by 1.
      </li>
      <li>
        <strong>Incisive Sense:</strong>
        You have advantage on Investigation and Insight checks.
      </li>
      <li>
        <!-- FIXME: Link to spells -->
        <strong>Blessing of the Moonweaver:</strong>
        You know the Light cantrip. When you reach 3rd level, you can cast Sleep
        once, and it recharges after a long rest. When you reach 5th level, you can
        cast Invisibility (Self Only) once, and it recharges after a long rest. You
        do not need the material components required of the spells. Wisdom is your
        spellcasting ability for these spells.
      </li>
    </ul>
  {:else if currSource === sources[2]}
    <!-- Eberron: Rising from the Last War -->

    <p>
      <em><strong>{summary}</strong></em>
    </p>

    <ul class="info">
      {#each Object.entries(baseInfo) as [section, desc]}
        <li><strong>{section}: </strong>{desc}</li>
      {/each}
    </ul>

    <h2>Mark of Shadow</h2>
    <p>
      <em>
        If you're an elf with the Mark of Shadow, you have this subrace, with
        the following traits.
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Your Charisma score increases by 1.
      </li>
      <li>
        <strong>Cunning Intuition:</strong>
        Whenever you roll a Dexterity (Stealth) check or a Charisma (Performance)
        check, roll a d4 and add the number rolled to the total ability check.
      </li>
      <li>
        <!-- FIXME: Link to spells -->
        <strong>Shape Shadows:</strong>
        You know the Minor Illusion cantrip. Starting at 3rd level, you can also
        cast the Invisibility spell with this trait. Once you cast either spell with
        this trait, you can't cast that spell again until you finish a long rest.
        Charisma is your Spellcasting Ability for these spells.
      </li>
      <li>
        <strong>Spells of the Mark:</strong>
        If you have the Spellcasting or Pact Magic class features, the spells on
        the Mark of Shadow Spells table are added to the spell list of your spellcasting
        class:
      </li>

      <!-- FIXME: Add overlay for spells!! -->
      <table id="spells">
        <tr>
          <th>Spell Level</th>
          <th>Spell</th>
        </tr>
        <tr>
          <td>1st</td>
          <td>
            <span class="spell">Disguise Self</span>,
            <span class="spell">Silent Image</span>
          </td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>
            <span class="spell">Darkness</span>,
            <span class="spell">Pass Without Trace</span>
          </td>
        </tr>
        <tr>
          <td>3rd</td>
          <td>
            <span class="spell">Clairvoyance</span>,
            <span class="spell">Major Image</span>
          </td>
        </tr>
        <tr>
          <td>4th</td>
          <td>
            <span class="spell">Greater Invisibility</span>,
            <span class="spell">Hallucinatory Terrain</span>
          </td>
        </tr>
        <tr>
          <td>5th</td>
          <span class="spell">Mislead</span>
        </tr>
      </table>
    </ul>
  {:else if currSource === sources[3]}
    <!-- Spelljammer: Adventures in Space -->

    <h2>Astral Elf</h2>
    <p>
      <em
        ><strong>
          Long ago, groups of elves ventured from the Feywild to the Astral
          Plane to be closer to their gods. Life in the Silver Void has imbued
          their souls with a spark of divine light. That light manifests as a
          starry gleam in an astral elf's eyes.
          <br />
          Because nothing ages on the Astral Plane, astral elves who inhabit that
          plane can be very old, and their longevity gives them an unusual perspective
          on the passage of time. Some are prone to melancholy, while others might
          display an absence of feeling. Many look for creative ways to occupy themselves.
          Whether they choose to live in quiet contemplation or strike out to explore
          the reaches of the multiverse, astral elves tend to see things through
          the lens of time as having little or no meaning to them. Astral elves who
          don't dwell in the Astral Plane can live to be more than 750 years old.
        </strong>
      </em>
    </p>
    <ul class="info">
      <li>
        <strong>Ability Score Increase:</strong>
        Increase one ability score by 2, and increase a different one by 1, or increase
        three different scores by 1.
      </li>
      <li>
        <strong>Creature Type:</strong>
        You are a Humanoid. You are also considered an elf for any prerequisite or
        effect that requires you to be an elf.
      </li>
      <li>
        <strong>Size:</strong>
        You are Medium.
      </li>
      <li>
        <strong>Speed:</strong>
        Your walking speed is 30 feet.
      </li>
      <li>
        <!-- FIXME: Link to spells -->
        <strong>Astral Fire:</strong>
        You know one of the following cantrips of your choice: Dancing Lights, Light,
        or Sacred Flame. Intelligence, Wisdom, or Charisma is your spellcasting ability
        for it (choose when you select this race).
      </li>
      <li>
        <strong>Darkvision:</strong>
        You can see dim light within 60 feet of yourself as if it were bright light,
        and in darkness as if it were dim light. You discern colors in darkness only
        as shades of gray.
      </li>
      <li>
        <strong>Fey Ancestry:</strong>
        You have advantage on saving throws you make to avoid or end the charmed
        condition on yourself.
      </li>
      <li>
        <strong>Keen Senses.:</strong>
        You have proficiency in the Perception skill.
      </li>
      <li>
        <strong>Starlight Step:</strong>
        As a bonus action, you can magically teleport up to 30 feet to an unoccupied
        space you can see. You can use this trait a number of times equal to your
        proficiency bonus, and you regain all expended uses when you finish a long
        rest.
      </li>
      <li>
        <strong>Astral Trance:</strong>
        You don't need to sleep, and magic can't put you to sleep. You can finish
        a long rest in 4 hours if you spend those hours in a trancelike meditation,
        during which you remain conscious. Whenever you finish this trance, you gain
        proficiency in one skill of your choice and with one weapon or tool of your
        choice, selected from the Player's Handbook. You magically acquire these
        proficiencies by drawing them from shared elven memory and the experiences
        of entities on the Astral Plane, and you retain them until you finish your
        next long rest.
      </li>
      <li>
        <strong>Languages:</strong>
        You can speak, read, and write Common and one other language that you and
        your DM agree is appropriate.
      </li>
    </ul>
  {/if}
</div>

<style>
  @import "./subtypeStyles.css";

  .spell:hover {
    color: #ff6699;
  }
</style>
