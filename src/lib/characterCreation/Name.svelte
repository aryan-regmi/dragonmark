<script lang="ts">
  export let name: string = "";
</script>

<div id="name-menu">
  <div id="name-header"><strong>Character Name:</strong></div>
  <div>
    <input
      id="name-input"
      type="text"
      placeholder="Enter character name..."
      bind:value={name}
    />
  </div>
</div>

<style>
  #name-menu {
    padding-top: 20vh;
  }

  #name-header {
    padding-bottom: 1vh;
    text-decoration: underline;
    font-size: 24px;
  }

  #name-input {
    background-color: black;
    opacity: 75%;
  }
</style>
