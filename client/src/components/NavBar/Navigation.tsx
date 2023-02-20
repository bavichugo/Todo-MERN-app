// TODO: add functionality to login and logout properly

const NavBar = () => {
  return (
    <div className="max-w-5xl w-full flex justify-between h-12 items-center text-xl">
      <span>Todo</span>
      {true && (
        <button className="border-solid border-2 border-emerald-400 rounded-lg px-2 hover:bg-emerald-300/20">
          Login
        </button>
      )}
      {false && (
        <span className="border-solid border-2 border-emerald-400 rounded-lg px-2 hover:bg-emerald-300/20">
          Logout
        </span>
      )}
    </div>
  );
};

export default NavBar;
