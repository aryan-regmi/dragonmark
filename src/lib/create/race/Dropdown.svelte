<script lang="ts">
  export let sources: any;
  export let defaultChoice: string = "phb";
  export let currChoice = sources[defaultChoice];
  export let mainButtonMsg: string = "Change Source: ";

  let display = "display: none";
  function displayChoices() {
    if (display === "display: block") {
      display = "display: none";
    } else {
      display = "display: block";
    }
  }

  function changeChoice(this: any) {
    currChoice = sources[this.id];
    displayChoices();
  }
</script>

<div id="change-src">
  <button class="dropdown" id="change-src-btn" on:click={displayChoices}
    >{mainButtonMsg} {currChoice}</button
  >
  {#each Object.entries(sources) as [key, src]}
    <button
      class="dropdown-content"
      style={display}
      id={key}
      on:click={changeChoice}>{src}</button
    >
  {/each}
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
  }

  .dropdown-content {
    z-index: 1;
    opacity: 90%;
    width: 100%;
    background-color: #1f1f26;
    border-radius: 0;
    border-bottom-color: black;
  }

  #change-src {
    padding-bottom: 1vh;
  }

  #change-src-btn {
    width: 100%;
    background-color: #1f1f21;
    opacity: 100%;
  }

  button:hover {
    color: white;
    border-color: white;
  }
</style>
