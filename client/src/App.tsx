import NavBar from "./components/NavBar/Navigation";

function App() {
  return (
    <div className="h-full bg-blue-900 flex flex-col items-center">
      <NavBar />
      <div className="content w-full h-full max-w-5xl">
        <h1 className="">Hello!</h1>
      </div>
    </div>
  );
}

export default App;
