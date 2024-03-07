<script lang="ts">
  // The list of possible options.
  export let navOpts: string[];
  export let currPage = navOpts[0];

  // Sets up style for selected navbar page.
  let styles = navOpts.map(() => "");
  let selectedStyle = "color: orange";
  styles[0] = selectedStyle;

  // Resets the style
  function resetStyles() {
    for (let i = 0; i < navOpts.length; i++) {
      styles[i] = "";
    }
  }

  // Switches to the clicked page on the navbar.
  export function switchPage(this: any, newPage: number) {
    resetStyles();
    // let pageNum = navOpts.indexOf(this.id, 0);
    currPage = navOpts[newPage];
    styles[newPage] = selectedStyle;
  }
</script>

<nav id="navbar">
  {#each navOpts as opt, i}
    <button
      class="nav-item"
      id={opt}
      style={styles[i]}
      on:click={() => switchPage(i)}>{opt}</button
    >
  {/each}
</nav>

<style>
  #navbar {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    border-style: groove;
    opacity: 80%;
    justify-content: center;
    margin-bottom: 2vh;
    margin-top: 1vh;
    z-index: 5;
  }

  button:hover {
    border-color: black;
  }
</style>
