function Item(props) {
  return <li>{props.todo}</li>;
}

function TodoList(props) {
  const todos = props.todos;

  return todos.map((todo, index) => {
    <Item key={index}>{todo}</Item>;
  });
}

export default TodoList;