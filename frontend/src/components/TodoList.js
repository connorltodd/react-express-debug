import React from "react";
import Todo from "./Todo";
import { TodosContext } from "../contexts/TodosContext";

export default function TodoList() {
  const { todos, createNewTodo } = React.useContext(TodosContext);
  const [newTodoInput, setNewTodoInput] = React.useState("");

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setNewTodoInput(event.target.value);
        }}
      />
      <button onClick={() => createNewTodo(newTodoInput)}>Submit Todo</button>
      {todos.map((item) => (
        <Todo {...item} key={item.id} />
      ))}
    </div>
  );
}
