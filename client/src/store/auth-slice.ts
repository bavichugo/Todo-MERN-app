import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_ROUTES } from "../constants/routes";
import METHODS from "../constants/api-methods";

interface LoginPayload {
  email: string;
  password: string;
}

interface IPutSignup {
  email: string;
  password: string;
  confirmPassword: string;
}

export const putSignup = createAsyncThunk(
  AUTH_ROUTES.SIGNUP,
  async (payload: IPutSignup) => {
    try {
      const { email, password, confirmPassword } = payload;
      const createUserResponse = await fetch("http://localhost:8080/auth/signup", {
        method: METHODS.PUT,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      if (createUserResponse.status === 422) {
        throw new Error("Validation failed, make sure the email address isn't used yet");
      }

      if (createUserResponse.status !== 200 && createUserResponse.status !== 201) {
        throw new Error("Creating a user failed!")
      }

      console.log(createUserResponse);
      alert("Creating a user suceeded! Please, login now.");
    } catch (error) {
      console.log(error);
    }
  }
);

const authInitialState = { isAuthenticated: false, loading: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(putSignup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(putSignup.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
