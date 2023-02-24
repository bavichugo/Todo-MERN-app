import { FormEvent, useRef } from "react";
import { validPassword } from "../../../utils/signup";
import EmeraldButton from "../../UI/Buttons/EmeraldButton";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    if(!validPassword(password)) return;
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <h1 className="text-5xl">Login</h1>
      <h2 className="m0">If you do not have an account, please signup by clicking the button on top.</h2>
      <form className="flex flex-col gap-4 w-full" onSubmit={onSubmitHandler}>
        <label className="flex flex-col" htmlFor="email">
          Email
          <input
            className="h-10 text-black pl-2 rounded-lg"
            placeholder="Type email here..."
            name="email"
            type="email"
            ref={emailRef}
          />
        </label>
        <label className="flex flex-col" htmlFor="email">
          Password
          <input
            className="h-10 text-black pl-2 rounded-lg"
            placeholder="Type password here..."
            name="password"
            type="password"
            ref={passwordRef}
          />
        </label>
        <EmeraldButton type="submit">Login</EmeraldButton>
      </form>
    </div>
  );
};

export default Login;
