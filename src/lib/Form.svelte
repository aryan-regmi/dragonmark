<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import Races from "./Races.svelte";

  let name = "";

  async function create() {
    await invoke("create", { name });
  }
</script>

<div>
  <h2 style="text-decoration-line: underline;">Character Name:</h2>
  <form on:submit|preventDefault={create}>
    <div id="contents">
      <input
        id="name-input"
        placeholder="Enter character name..."
        bind:value={name}
      />

      <h2 style="text-decoration-line: underline;">Choose Race:</h2>
      <Races />

      <button type="submit">Create</button>
    </div>
  </form>
</div>

<style>
  #contents {
    margin-bottom: 1vh;
  }
</style>
