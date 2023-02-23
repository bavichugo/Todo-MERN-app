import { FormEvent } from "react";
import EmeraldButton from "../UI/Buttons/EmeraldButton";

const Login = () => {
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmitHandler}>
      <label className="flex flex-col" htmlFor="email">
        Email
        <input
          className="h-10 text-black pl-2 rounded-lg"
          placeholder="Type email here..."
          name="email"
          type="email"
        />
      </label>
      <label className="flex flex-col" htmlFor="email">
        Password
        <input
          className="h-10 text-black pl-2 rounded-lg"
          placeholder="Type password here..."
          name="password"
          type="password"
        />
      </label>
      <EmeraldButton type="submit">Login</EmeraldButton>
    </form>
  );
};

export default Login;
