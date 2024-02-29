<script lang="ts">
  async function overlay(this: any) {
    console.log(this.id);
  }
</script>

<!--  TODO: Make each of these open an overlay of info when clicked -->
<ul class="races">
  <li class="race" id="dragonborn" on:click={overlay}>Dragonborn</li>
  <li class="race" id="dwar">Dwarf</li>
  <li class="race" id="elf">Elf</li>
  <li class="race" id="gnome">Gnome</li>
  <li class="race" id="half-elf">Half-Elf</li>
  <li class="race" id="half-orc">Half-Orc</li>
</ul>

<style>
  .races {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 18px;
    list-style-type: square;
  }

  .race {
    flex: 1 1 25%;
    text-align: left;
    height: 3vh;
    margin-left: 5vh;
  }

  .race:hover {
    color: #2596be;
  }
</style>
