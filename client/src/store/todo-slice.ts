import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";

interface TodoState {
  todoList: Todo[];
}

const initialTodoState: TodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, { payload }: {payload: string}) {
      state.todoList.push({ text: payload, id: new Date().toISOString() });
    },
    removeTodo(state, { payload }: {payload: string}) {
      const newTodoList = state.todoList.filter(todo => todo.id !== payload);
      state.todoList = newTodoList;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
