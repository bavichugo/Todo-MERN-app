import EmeraldButton from "../components/UI/Buttons/EmeraldButton";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-row gap-4 items-center mt-4">
      <h1>Page does not exists, return to home:</h1>
      <Link to="/">
        <EmeraldButton>Home</EmeraldButton>
      </Link>
    </div>
  );
};

export default Page404;
