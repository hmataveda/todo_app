import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Searchbar";
import TodoLists from "./MiddleTodo/TodoList";
import ActionsinFoote from "./Footer/footerBar";
function App() {
  return (
    <div className="m-4">
      <Header />
      <TodoLists />
    </div>
  );
}

export default App;
