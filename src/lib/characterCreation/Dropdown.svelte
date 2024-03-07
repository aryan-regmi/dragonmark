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
    background-color: #21a179;
  }

  .dropdown-items {
    border-radius: 0;
    opacity: 70%;
  }

  .dropdown-item {
    background-color: #25353d;
    border-radius: 0;
    /* border-bottom-color: #666600; */
    border-color: black;
    display: none;
    z-index: 1;
    width: 80%;
    margin-left: 10%;
  }

  button:hover {
    border-color: white;
    color: #21a179;
  }
</style>
