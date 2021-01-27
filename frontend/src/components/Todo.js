import React from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function Todo(props) {
  const { deleteTodo } = React.useContext(TodosContext);

  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <h1>{props.name}</h1>
      <p>{props.isCompleted ? "Completed" : "Uncompleted"}</p>
      <button onClick={() => deleteTodo(props.id)}>Delete Todo</button>
    </div>
  );
}
