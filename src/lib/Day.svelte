<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleSelect() {
    dispatch('select', day);
  }

  export let selected = false;
  export let day;
</script>

<div class="day" class:selected on:click={handleSelect}>
  <p>{day.date}</p>
  <p>{day.day}</p>
</div>

<style lang="scss">
  @use '../style/variables' as v;

  .day {
    background: white;
    padding: 0.5rem 0.9rem;
    margin: 1rem;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(141, 141, 141, 0.1);
    user-select: none;
    cursor: pointer;

    &:nth-child(1) {
      margin-left: 0;
    }

    &.selected {
      background: v.$main-blue;

      p {
        color: white;
      }
    }

    p {
      color: #333;

      &:nth-child(1) {
        font-size: 1.1rem;
        font-weight: 500;
      }

      &:nth-child(2) {
        font-size: 0.7rem;
      }
    }
  }
</style>
