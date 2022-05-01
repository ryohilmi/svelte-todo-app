<script>
  import '../helper';
  import { dateIsEqual, getDateFromToday, getTodayDate } from '../helper';
  import Day from './Day.svelte';
  import TodoItem from './TodoItem.svelte';

  let selectedDate = getTodayDate();

  let days = Array.from({ length: 8 }).map((_, i) => {
    return getDateFromToday(i);
  });

  function selectDate(e) {
    selectedDate = e.detail;
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
