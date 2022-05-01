<script>
</script>

<div class="sidebar">
  <h1>Svelt<span>Do</span></h1>
</div>

<style lang="scss">
  @use '../style/variables' as v;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    height: 100vh;
    width: 220px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(102, 102, 102, 0.1);

    h1 {
      margin: 3rem auto;
      text-align: center;
      font-weight: 600;

      span {
        color: v.$main-blue;
      }
    }
  }
</style>
