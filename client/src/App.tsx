import NavBar from "./components/UI/Navigation";
import TodoMain from "./components/Todo/TodoMain";
import { useSelector } from "react-redux";
import { StoreState } from "./store";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Page404 from "./pages/Page404";
import { Routes, Route } from "react-router-dom";

function App() {
  const isAuthenticated = useSelector(
    (state: StoreState) => state.auth.isAuthenticated
  );

  return (
    <div className="h-full bg-blue-900 flex flex-col items-center px-4">
      <NavBar />
      <div className="content w-full h-full max-w-5xl">
        <Routes>
          {!isAuthenticated && <Route path="/" element={<Login />} />}
          {!isAuthenticated && <Route path="login" element={<Login />} />}
          {!isAuthenticated && <Route path="signup" element={<Signup />} />}
          {isAuthenticated && <Route path="/" element={<TodoMain />} />}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
