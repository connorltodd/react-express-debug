import React from "react";
import Todo from "./Todo";
import { TodosContext } from "../contexts/TodosContext";

export default function TodoList() {
  const { todos } = React.useContext(TodosContext);
  return (
    <div>
      {todos.map((item) => (
        <Todo {...item} key={item.id} />
      ))}
    </div>
  );
}
