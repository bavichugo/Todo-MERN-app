import EmeraldButton from "../UI/Buttons/EmeraldButton";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";
import { Todo } from "../../models/Todo";

const TodoItem = (props: Todo) => {
  const dispatch = useDispatch();

  return (
    <li className="bg-white text-black flex items-center justify-between p-1 rounded-lg">
      <span>{props.text}</span>
      <EmeraldButton onClick={() => dispatch(todoActions.removeTodo(props.id))}>
        Done
      </EmeraldButton>
    </li>
  );
};

export default TodoItem;
