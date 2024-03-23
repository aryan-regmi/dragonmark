<script lang="ts">
  import Dropdown from "../Dropdown.svelte";
  import { type Source } from "../../types/Source.d";

  export let hasSubtype: boolean;
  export let subtypeChosen: boolean;

  export let title: string;
  export let summary: string;
  export let baseInfo: { [index: string]: string };

  export let sources: Source[];
  export let defaultSource = sources[0];
  let currSource: string;

  // export let subtypes: SubtypeDesc[];
</script>

<div>
  <h1 id="title">{title}</h1>

  {#if sources.length !== 0}
    <Dropdown
      title="Select Source"
      dropdownOpts={sources.map((x) => x.title)}
      bind:currOpt={currSource}
    />
  {/if}

  <div id="content">
    {#each sources as source}
      <!-- {#if currSource === source[0]} -->
      <!--    -->
      <!-- {/if} -->
    {/each}
  </div>
</div>
