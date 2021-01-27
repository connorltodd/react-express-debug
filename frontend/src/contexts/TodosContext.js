import React from "react";
import axios from "axios";

export const TodosContext = React.createContext(null);

export default function TodosContextProvider(props) {
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = () => {
    axios.get("/todos").then((response) => setTodos(response.data));
  };

  const createNewTodo = (todoToAddName) => {
    const todo = { name: todoToAddName, isCompleted: false };
    axios
      .post("/todos", todo)
      .then((response) => setTodos([...todos, response.data[0]]));
  };

  const deleteTodo = (todoToDeleteId) => {
    axios.delete(`/todos/${todoToDeleteId}`).then((response) => {
      const newTodosList = todos.filter((todo) => todo.id !== todoToDeleteId);
      setTodos(newTodosList);
    });
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <TodosContext.Provider value={{ todos, createNewTodo, deleteTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}
