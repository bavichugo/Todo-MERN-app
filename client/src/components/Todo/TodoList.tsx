import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { StoreState } from "../../store";

const TodoList = () => {
  const todoList = useSelector((state: StoreState) => state.todo.todoList);

  return (
    <ul className="flex flex-col gap-2 my-4">
      {todoList.map((todo) => (
        <TodoItem text={todo.text} id={todo.id} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
