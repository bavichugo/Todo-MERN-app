import { FormEvent, useRef } from "react";
import EmeraldButton from "../UI/Buttons/EmeraldButton";
import { validPassword } from "../../utils/signup";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const password = passwordRef.current!.value.trim();
    const confirmPassword = confirmPasswordRef.current!.value.trim();
    if (!validPassword(password, confirmPassword)) return;
    formRef.current?.reset();
  };

  return (
    <form
      className="flex flex-col gap-4 mt-4"
      ref={formRef}
      onSubmit={onSubmitHandler}
    >
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
      <label className="flex flex-col" htmlFor="password">
        Password
        <input
          className="h-10 text-black pl-2 rounded-lg"
          placeholder="Type password here..."
          name="password"
          type="password"
          ref={passwordRef}
        />
      </label>
      <label className="flex flex-col" htmlFor="confirmPassword">
        Confirm Password
        <input
          className="h-10 text-black pl-2 rounded-lg"
          placeholder="Type password here..."
          name="confirmPassword"
          type="password"
          ref={confirmPasswordRef}
        />
      </label>
      <EmeraldButton type="submit">Signup</EmeraldButton>
    </form>
  );
};

export default Signup;
