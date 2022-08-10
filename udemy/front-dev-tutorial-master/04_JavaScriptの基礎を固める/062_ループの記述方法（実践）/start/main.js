const todos = [
  {
    id: 1,
    title: "Go to school",
    completed: true
  },
  {
    id: 1,
    title: "Go to museum",
    completed: true
  },
  {
    id: 1,
    title: "Go to shopping",
    completed: true
  }
]

for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i, todo.title);
  }

}
