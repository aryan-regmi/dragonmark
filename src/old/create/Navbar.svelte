<script lang="ts">
  import { CreateCharNavbar as Navbar } from "../types/CreateCharNavbar.d";

  // The current page of the `Create Character` option.
  export let currPage: Navbar = Navbar.Name;

  // The styles for each navbar page.
  let selectedStyle = "color: orange";
  let currStyles = { name: selectedStyle, race: "", class: "", background: "" };

  // Resets the styles for page switching.
  function resetStyles() {
    currStyles.name = "";
    currStyles.race = "";
    currStyles.class = "";
    currStyles.background = "";
  }

  // All functions that switch navbar pages.
  export const switchPages = {
    name: namePage,
    race: racePage,
    class: classPage,
    background: backgroundPage,
  };

  // Switch to the `Name` page.
  export function namePage() {
    currPage = Navbar.Name;
    resetStyles();
    currStyles.name = selectedStyle;
  }

  // Switch to the `Race` page.
  export function racePage() {
    currPage = Navbar.Race;
    resetStyles();
    currStyles.race = selectedStyle;
  }

  // Switch to the `Class` page.
  export function classPage() {
    currPage = Navbar.Class;
    resetStyles();
    currStyles.class = selectedStyle;
  }

  // Switch to the `Background` page.
  export function backgroundPage() {
    currPage = Navbar.Background;
    resetStyles();
    currStyles.background = selectedStyle;
  }
</script>

<nav>
  <button class="nav-item" style={currStyles.name} on:click={namePage}
    >Name</button
  >
  <button class="nav-item" style={currStyles.race} on:click={racePage}
    >Race</button
  >
  <button class="nav-item" style={currStyles.class} on:click={classPage}
    >Class</button
  >
  <button
    class="nav-item"
    style={currStyles.background}
    on:click={backgroundPage}>Background</button
  >
</nav>

<style>
  nav {
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

  .nav-item {
    padding-left: 5vw;
    background-color: inherit;
    opacity: 100%;
  }

  button:hover {
    border-color: black;
  }
</style>
