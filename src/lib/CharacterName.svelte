<script lang="ts">
  export let characterName = "";
</script>

<div id="character-name">
  <h2 id="input-title">Character Name:</h2>
  <input
    id="name-input"
    type="text"
    placeholder="Enter name here..."
    bind:value={characterName}
  />
</div>

<style>
  #character-name {
    padding-top: 15vh;
  }

  #name-input {
    background-color: black;
    opacity: 85%;
  }

  #input-title {
    text-decoration: underline;
  }
</style>
