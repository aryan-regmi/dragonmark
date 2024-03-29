<script lang="ts">
  import Dropdown from "../Dropdown.svelte";

  export const hasSubtype = true;
  export let subtypeChosen = false;

  const summary =
    "A constant hum of busy activity pervades the warrens and neighborhoods where\
    gnomes form their close-knit communities. Louder sounds punctuate the hum: a \
    crunch of grinding gears here, a minor explosion there, a yelp of surprise or\
    triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying\
    every moment of invention, exploration, investigation, creation, and play.";

  const baseInfo: { [index: string]: string } = {
    "Ability Score Increase": "Your Intelligence score increases by 2.",
    Age: "Gnomes mature at the same rate as humans, and most are expected to settle\
      into adult life around the age of 40. They can live to 350 years on average,\
      but it's not too uncommon for them to reach 500 years of age.",
    Alignment:
      "Gnomes are generally Good. Those who tend towards Law are sages, engineers,\
      researchers, scholars, investigators, or inventors. Those who tend towards \
      Chaos are often minstrels, tricksters, wanderers, or fanciful jewelers. \
      Gnomes are light-hearted, and even the tricksters amongst them favor \
      harmless pranks over vicious schemes.",
    Size: "Gnomes are between 3 and 4 feet tall and weigh around 40 pounds. \
      Your size is Small.",
    Speed: "Your base walking speed is 25 feet",
    Darkvision:
      "Accustomed to life underground, you have superior vision in dark and dim \
      conditions. You can see in dim light within 60 feet of you as if it were \
      bright light, and in darkness as if it were dim light. You can't discern \
      color in darkness, only shades of gray.",
    "Gnome Cunning":
      "You have advantage on all Intelligence, Wisdom, and Charisma saves against magic.",
    Languages: "You can speak, read, and write Common and Gnomish.",
  };

  const sources = ["Player's Handbook", "Eberron: Rising from the Last War"];
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

  $: if (currSource === sources[1]) {
    subtypeChosen = true;
  }
</script>

<h1 id="title">Gnome</h1>

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

    <div>
      <h2>Forest</h2>
      <p>
        <em>
          As a forest gnome, you have a natural knack for illusion and inherent
          quickness and stealth. In the worlds of D&D, forest gnomes are rare
          and secretive. They gather in hidden communities in sylvan forests,
          using illusions and trickery to conceal themselves from threats or to
          mask their escape should they be detected. Forest gnomes tend to be
          friendly with other good-spirited woodland folk, and they regard elves
          and good fey as their most important allies. These gnomes also
          befriend small forest animals and rely on them for information about
          threats that might prowl their lands.
        </em>
      </p>
      <ul class="info">
        <li>
          <strong>Ability Score Increase:</strong> Your Dexterity score increases
          by 1.
        </li>
        <li>
          <strong>Natural Illusionist:</strong>
          You know the <span class="spell">Minor Illusion</span> cantrip. Intelligence
          is your spellcasting modifier for it.
        </li>
        <li>
          <strong>Speak with Small Beasts:</strong>
          Through sound and gestures, you may communicate simple ideas with Small
          or smaller beasts.
        </li>
      </ul>
    </div>

    <div>
      <h2>Rock</h2>
      <p>
        <em>
          As a rock gnome, you have a natural inventiveness and hardiness beyond
          that of other gnomes. Most gnomes in the worlds of D&D are rock
          gnomes, including the tinker gnomes of the Dragonlance setting.
        </em>
      </p>
      <ul class="info">
        <li>
          <strong>Ability Score Increase:</strong> Your Constitution score increases
          by 1.
        </li>
        <li>
          <strong>Artificer's Lore:</strong>
          Whenever you make an Intelligence (History) check related to magical, alchemical,
          or technological items, you can add twice your proficiency bonus instead
          of any other proficiency bonus that may apply.
        </li>
        <li>
          <strong>Tinker:</strong>
          You have proficiency with artisan tools (tinker's tools). Using those tools,
          you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork
          device (AC 5, 1 hp). The device ceases to function after 24 hours (unless
          you spend 1 hour repairing it to keep the device functioning), or when
          you use your action to dismantle it; at that time, you can reclaim the
          materials used to create it. You can have up to three such devices active
          at a time. When you create a device, choose one of the following options:
          <ul class="inner-list">
            <li class="inner-item">
              <strong>Clockwork Toy:</strong>
              This toy is a clockwork animal, monster, or person, such as a frog,
              mouse, bird, dragon, or soldier. When placed on the ground, the toy
              moves 5 feet across the ground on each of your turns in a random direction.
              It makes noises as appropriate to the creature it represents.
            </li>
            <li class="inner-item">
              <strong>Fire Starter:</strong>
              The device produces a miniature flame, which you can use to light a
              candle, torch, or campfire. Using the device requires your action.
            </li>
            <li class="inner-item">
              <strong>Music Box:</strong>
              When opened, this music box plays a single song at a moderate volume.
              The box stops playing when it reaches the song's end or when it is
              closed.
            </li>
            <li class="inner-item">
              At your DM's discretion, you may make other objects with effects
              similar in power to these. The <span class="spell"
                >Prestidigitation</span
              > cantrip is a good baseline for such effects.
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <Dropdown
      title="Select Subtype"
      dropdownOpts={["Forest", "Rock"]}
      bind:currOpt={phbSubtype}
    />
  {:else if currSource === sources[1]}
    <!-- Eberron: Rising from the Last War -->

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
  {/if}
</div>

<style>
  @import "./subtypeStyles.css";

  .inner-item {
    background: none;
    padding-bottom: 0;
  }

  .spell:hover,
  .spell-list:hover {
    color: #ff6699;
    cursor: pointer;
  }

  .spell,
  .spell-list {
    color: #81ae9d;
  }
</style>
