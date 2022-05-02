<script>
  import { markTodo } from '../helper';

  export let title;
  export let done;
  export let date;

  $: markTodo(date, title, done);
</script>

<div class="todo-item">
  <div class="todo-checkbox">
    <input type="checkbox" name="done" bind:checked={done} />
  </div>
  <div class="desc">
    <p class="title">{title}</p>
  </div>
</div>

<style lang="scss">
  @use '../style/variables' as v;

  .todo-item {
    background: white;
    /* padding: 0 1rem; */
    margin: 1rem auto;
    border-radius: 15px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(102, 102, 102, 0.05);
    transition: 0.2s all ease-out;

    &:hover {
      transform: scale(1.02);
      transition: 0.2s all ease-out;
    }

    .todo-checkbox {
      border-right: 1px solid rgb(204, 203, 203);
      height: 40px;
      flex-shrink: 1;
      display: flex;
      align-items: center;
      padding: 1rem;
      padding-left: 1.2rem;

      input {
        accent-color: v.$main-blue;
        height: 20px;
        width: 20px;
        padding: 0.5em;
      }
    }

    .desc {
      padding: 0.8rem 1rem;

      .title {
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }
</style>
