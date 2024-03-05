<script lang="ts">
  export let name: string = "";
</script>

<div id="name-section">
  <div id="name-title"><strong>Character Name:</strong></div>
  <input
    id="name-input"
    type="text"
    placeholder="Enter character name..."
    bind:value={name}
  />
</div>

<style>
  #name-section {
    padding-top: 25vh;
  }

  #name-title {
    padding-bottom: 1vh;
    text-decoration: underline;
    font-size: 24px;
  }

  #name-input {
    background-color: black;
    opacity: 75%;
  }
</style>
