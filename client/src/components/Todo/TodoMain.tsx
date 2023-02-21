import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Fragment } from "react";

const TodoMain = () => {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
    </Fragment>
  );
};

export default TodoMain;
