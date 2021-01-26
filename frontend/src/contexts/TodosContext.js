import React from "react";
import axios from "axios";

export const TodosContext = React.createContext(null);

export default function TodosContextProvider(props) {
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = () => {
    axios.get("/get-todos").then((response) => setTodos(response.data));
  };

  React.useEffect(() => {
    fetchTudos();
  }, []);
  return (
    <TodosContext.Provider value={{ todos }}>
      {props.children}
    </TodosContext.Provider>
  );
}
