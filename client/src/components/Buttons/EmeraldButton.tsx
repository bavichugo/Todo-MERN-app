// TODO: create button to be reused throughout the app

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
}

const EmeraldButton = ({className, ...props}: ButtonProps) => {
  return (
    <button
      {...props}
      className="border-solid border-2 border-emerald-400 rounded-lg px-2 hover:bg-emerald-300/20 w-fit text-xl"
    >
      {props.children}
    </button>
  );
};

export default EmeraldButton;
