import { FormEvent, useRef } from "react";
import EmeraldButton from "../UI/Buttons/EmeraldButton";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todoDescriptionRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const todoText = todoDescriptionRef.current!.value;
    if (!todoText?.trim().length) {
      alert("ERROR: The input cannot be empty");
      return;
    }
    dispatch(todoActions.addTodo(todoText));
    formRef.current?.reset();
  };

  return (
    <form
      className="flex flex-col gap-y-3 pt-5"
      ref={formRef}
      onSubmit={onSubmitHandler}
    >
      <input
        className="h-10 text-black pl-2 rounded-lg"
        type="text"
        name="todoDescriptino"
        placeholder="Type here your todo..."
        ref={todoDescriptionRef}
      />
      <EmeraldButton>Create</EmeraldButton>
    </form>
  );
};

export default TodoForm;
