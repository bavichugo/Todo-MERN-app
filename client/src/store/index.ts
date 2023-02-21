import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer
  }
});

export type StoreState = ReturnType<typeof store.getState>
export default store;