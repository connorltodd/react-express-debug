import TodosContextProvider from "./contexts/TodosContext";
import TodosList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <TodosList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
