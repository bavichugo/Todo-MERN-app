import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  loginScreen: boolean;
  signupScreen: boolean;
}

const uiInitialState: UiState = { loginScreen: false, signupScreen: false };
const defaultState: UiState = { loginScreen: false, signupScreen: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    login() {
      return {
        ...defaultState,
        loginScreen: true,
      };
    },
    signup() {
      return {
        ...defaultState,
        signupScreen: true,
      };
    },
    logout() {
      return defaultState;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
