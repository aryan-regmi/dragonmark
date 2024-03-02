<script lang="ts">
  import CreationNavbar from "./CreationNavbar.svelte";
  import { NavbarPage } from "./types/NavbarPage.d";
  import CharacterName from "./CharacterName.svelte";

  let currPage: any;
</script>

<CreationNavbar bind:currPage />

{#if currPage === NavbarPage.Name}
  <CharacterName />
{/if}

<!-- TODO: Grab `currPage` from `CreationNavbar` and have conditional views based on that -->
