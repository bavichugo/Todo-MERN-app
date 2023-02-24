import EmeraldButton from "./Buttons/EmeraldButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../../store";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(
    (state: StoreState) => state.auth.isAuthenticated
  );

  return (
    <div className="max-w-5xl w-full flex justify-between h-12 items-center text-xl py-2 border-b-white/20 border-b">
      <Link to="/">
        <span>Todo</span>
      </Link>
      {!isAuthenticated && (
        <div className="flex gap-4">
          <Link to="login">
            <EmeraldButton>Login</EmeraldButton>
          </Link>
          <Link to="signup">
            <EmeraldButton>Signup</EmeraldButton>
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <EmeraldButton onClick={() => console.log("Logout")}>
          Logout
        </EmeraldButton>
      )}
    </div>
  );
};

export default NavBar;
