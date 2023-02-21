// TODO: add functionality to login and logout properly

import EmeraldButton from "../Buttons/EmeraldButton";

const NavBar = () => {

  const loginHandler = () => {
    console.log("Login clicked!");
  }

  const logoutHandler = () => {

  }

  return (
    <div className="max-w-5xl w-full flex justify-between h-12 items-center text-xl pt-2">
      <span>Todo</span>
      {true && <EmeraldButton onClick={loginHandler}>Login</EmeraldButton>}
      {false && <EmeraldButton onClick={logoutHandler}>Logout</EmeraldButton>}
    </div>
  );
};

export default NavBar;
