<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Todos from './lib/Todos.svelte';
</script>

<main>
  <Sidebar />
  <Todos />
</main>

<style>
  :root {
    font-family: 'Poppins', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    color: #222;
  }
</style>
