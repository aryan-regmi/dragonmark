<script lang="ts">
  import { NavbarPage } from "./types/NavbarPage.d";

  export let currPage = NavbarPage.Name;
  let initStyle = "color: orange";
  let nameStyle = initStyle;
  let raceStyle = "";
  let classStyle = "";
  let backgroundStyle = "";

  export function namePage() {
    currPage = NavbarPage.Name;
    nameStyle = initStyle;
    raceStyle = "";
    classStyle = "";
    backgroundStyle = "";
  }

  export function racePage() {
    currPage = NavbarPage.Race;
    nameStyle = "";
    raceStyle = initStyle;
    classStyle = "";
    backgroundStyle = "";
  }

  export function classPage() {
    currPage = NavbarPage.Class;
    nameStyle = "";
    raceStyle = "";
    classStyle = initStyle;
    backgroundStyle = "";
  }

  export function backgroundPage() {
    currPage = NavbarPage.Background;
    nameStyle = "";
    raceStyle = "";
    classStyle = "";
    backgroundStyle = initStyle;
  }
</script>

<nav>
  <button class="nav-item" style={nameStyle} on:click={namePage}>Name</button>
  <button class="nav-item" style={raceStyle} on:click={racePage}>Race</button>
  <button class="nav-item" style={classStyle} on:click={classPage}>Class</button
  >
  <button class="nav-item" style={backgroundStyle} on:click={backgroundPage}
    >Background</button
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
    color: red;
    border-color: black;
  }
</style>
