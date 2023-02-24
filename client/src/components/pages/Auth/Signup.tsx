import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import EmeraldButton from "../../UI/Buttons/EmeraldButton";
import { validPasswordAndConfirmPassword } from "../../../utils/signup";
import { postSignup } from "../../../store/auth-slice";
import { AppDispatch } from "../../../store";

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const confirmPassword = confirmPasswordRef.current!.value.trim();

    if (!validPasswordAndConfirmPassword(password, confirmPassword)) return;
    dispatch(postSignup({email, password, confirmPassword}));
    formRef.current?.reset();
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <h1 className="text-5xl">Signup</h1>
      <form
        className="flex flex-col gap-4 w-full"
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
    </div>
  );
};

export default Signup;
