import { FormEvent, useRef } from "react";
import EmeraldButton from "../Buttons/EmeraldButton";

const TodoForm = () => {
  const todoDescriptionRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
    // TODO: Handle submission event
  };

  return (
    <form className="flex flex-col gap-y-3 pt-5" onSubmit={onSubmitHandler}>
      <input
        className="h-10 text-black pl-2 rounded-lg"
        type="text"
        name="todoDescriptino"
        ref={todoDescriptionRef}
      />
      <EmeraldButton>Create</EmeraldButton>
    </form>
  );
};

export default TodoForm;
