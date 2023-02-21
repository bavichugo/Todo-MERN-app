import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: true };

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;