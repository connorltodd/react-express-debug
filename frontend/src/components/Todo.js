import React from "react";

export default function Todo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.isCompleted ? "Completed" : "Uncompleted"}</h1>
    </div>
  );
}
