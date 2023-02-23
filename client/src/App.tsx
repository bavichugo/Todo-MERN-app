import NavBar from "./components/UI/Navigation";
import TodoMain from "./components/Todo/TodoMain";
import { useSelector } from "react-redux";
import { StoreState } from "./store";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const isAuthenticated = useSelector((state: StoreState) => state.auth.isAuthenticated);
  const {loginScreen, signupScreen} = useSelector((state: StoreState) => state.ui);

  return (
    <div className="h-full bg-blue-900 flex flex-col items-center px-4">
      <NavBar />
      <div className="content w-full h-full max-w-5xl">
        {isAuthenticated && <TodoMain />}
        {!isAuthenticated && loginScreen && <Login />}
        {!isAuthenticated && signupScreen && <Signup />}
      </div>
    </div>
  );
}

export default App;
