import EmeraldButton from "./Buttons/EmeraldButton";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { StoreState } from "../../store";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: StoreState) => state.auth.isAuthenticated);

  return (
    <div className="max-w-5xl w-full flex justify-between h-12 items-center text-xl py-2 border-b-white/20 border-b">
      <span>Todo</span>
      {!isAuthenticated && <EmeraldButton onClick={() => dispatch(authActions.login())}>Login</EmeraldButton>}
      {isAuthenticated && <EmeraldButton onClick={() => dispatch(authActions.logout())}>Logout</EmeraldButton>}
    </div>
  );
};

export default NavBar;
