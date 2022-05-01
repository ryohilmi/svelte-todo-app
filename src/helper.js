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

export function getTodos(date) {
  return todosData[`${date.date}-${date.month}`];
}
