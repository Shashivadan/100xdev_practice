type asCastTodo = {
  name: string;
};
fetch("sss")
  .then((date) => date.json())
  .then((data) => data as Todo)
  .then((date) => console.log(date));
