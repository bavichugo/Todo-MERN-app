import NavBar from "./components/UI/Navigation";
import TodoMain from "./components/Todo/TodoMain";
import { useSelector } from "react-redux";
import { StoreState } from "./store";

// TODO: if authenticated, show TodoMain
function App() {
  const isAuthenticated = useSelector((state: StoreState) => state.auth.isAuthenticated);

  return (
    <div className="h-full bg-blue-900 flex flex-col items-center px-4">
      <NavBar />
      <div className="content w-full h-full max-w-5xl">
        {isAuthenticated && <TodoMain />}
        {!isAuthenticated && <h1>Not authorized</h1>}
      </div>
    </div>
  );
}

export default App;
