<script lang="ts">
  export let dropdownOpts: string[];
  export let title: string;
  export let defaultOpt: string = dropdownOpts[0];
  export let currOpt: string = defaultOpt;

  let style = "";
  function dropdown() {
    if (style === "") {
      style = "display: block;";
    } else {
      style = "";
    }
  }

  function switchOpt(this: any) {
    currOpt = this.id;
    dropdown();
  }
</script>

<button class="dropdown" on:click={dropdown}>
  {title}: {currOpt}
</button>

<div class="dropdown-items">
  {#each dropdownOpts as opt}
    <button class="dropdown-item" id={opt} {style} on:click={switchOpt}
      >{opt}</button
    >
  {/each}
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-items {
    border-radius: 1vh;
    background-color: black;
    opacity: 80%;
  }

  .dropdown-item {
    border-radius: 1vh;
    border-bottom-color: #666600;
    display: none;
    z-index: 1;
    width: 100%;
  }

  button:hover {
    border-color: white;
    color: white;
  }
</style>
