<script>
  import {
    dateIsEqual,
    getDateFromToday,
    getTodayDate,
    getTodos,
  } from '../helper';
  import Day from './Day.svelte';
  import TodoItem from './TodoItem.svelte';

  let selectedDate = getTodayDate();

  let days = Array.from({ length: 8 }).map((_, i) => {
    return getDateFromToday(i);
  });

  let todos = [];

  function selectDate(e) {
    selectedDate = e.detail;
  }

  $: {
    todos = getTodos(selectedDate) || [];
    console.log(todos);
  }
</script>

<div class="todo">
  <div class="days">
    {#each days as day, i}
      <Day
        selected={dateIsEqual(selectedDate, day)}
        {day}
        on:select={selectDate}
      />
    {/each}
  </div>
  <h2>Tasks</h2>
  {#if todos.length > 0}
    {#each todos as todo (todo)}
      <TodoItem title={todo.title} done={todo.done} />
    {/each}
  {:else}
    <h3 class="empty">Looks like you don't know what to do this day :'(</h3>
  {/if}
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

    .empty {
      font-weight: 300;
      font-size: 2rem;
      margin-top: 1.5rem;
    }
  }
</style>
