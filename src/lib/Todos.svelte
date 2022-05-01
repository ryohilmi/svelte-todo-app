<script>
  import Day from './Day.svelte';
  import TodoItem from './TodoItem.svelte';

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<div class="todo">
  <div class="days">
    {#each Array(8) as _, i}
      <Day selected={i == 1} date={(i % 30) + 5} day={days[i % 7]} />
    {/each}
  </div>
  <h2>Tasks</h2>
  {#each Array(15) as _, i}
    <TodoItem />
  {/each}
</div>

<style lang="scss">
  .todo {
    background: RGB(247, 248, 250);
    width: 100%;
    min-height: 100vh;
    padding: 3rem 7rem 3rem calc(7rem + 220px);

    .days {
      display: flex;
    }
  }
</style>
