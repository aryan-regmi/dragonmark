<script lang="ts">
  import MainPage from "./lib/MainPage.svelte";
</script>

<!-- TODO: Add navbar underneath title (Shows current page) -->
<main class="container">
  <h1 id="title">Character Builder</h1>
  <MainPage />
</main>

<style>
  #title {
    background-color: black;
    opacity: 60%;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
</style>
