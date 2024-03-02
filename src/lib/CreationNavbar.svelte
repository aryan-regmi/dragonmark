<script lang="ts">
  enum Page {
    Name,
    Race,
    Class,
    Background,
  }

  let currPage = Page.Name;
</script>

<div id="creation-navbar">
  <label>
    <button>Name</button>
  </label>
  <label>
    <button>Race</button>
  </label>
  <label>
    <button>Class</button>
  </label>
  <label>
    <button>Background</button>
  </label>
</div>

<style>
  #creation-navbar {
    display: flexbox;
    flex-direction: row;
  }
</style>
