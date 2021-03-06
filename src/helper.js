import todosData from './data/todos.json';

export function getTodayDate() {
  let date = new Date();
  let dateArr = date.toString().split(' ');
  return {
    day: dateArr[0],
    date: parseInt(dateArr[2]),
    month: dateArr[1],
  };
}

export function getDateFromToday(n) {
  let today = new Date();
  let date = new Date(today);
  date.setDate(date.getDate() + n);
  let dateArr = date.toString().split(' ');
  return {
    day: dateArr[0],
    date: parseInt(dateArr[2]),
    month: dateArr[1],
  };
}

export function dateIsEqual(a, b) {
  if (a.day == b.day && a.date == b.date && a.month == b.month) return true;

  return false;
}

export function getTodos() {
  if (!localStorage.getItem('sveltdo')) {
    localStorage.setItem('sveltdo', JSON.stringify(todosData));
    return todosData;
  } else {
    return JSON.parse(localStorage.getItem('sveltdo'));
  }
}

export function getTodo(date) {
  let todos = getTodos();
  return todos[`${date.date}-${date.month}`];
}

export function markTodo(date, title, done) {
  let todos = getTodos();

  todos[`${date.date}-${date.month}`].find((todo) => {
    if (todo.title == title) {
      todo.done = done;
    }
  });
  localStorage.setItem('sveltdo', JSON.stringify(todos));
}
