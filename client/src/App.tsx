import NavBar from "./components/NavBar/Navigation";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="h-full bg-blue-900 flex flex-col items-center">
      <NavBar />
      <div className="content w-full h-full max-w-5xl">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
