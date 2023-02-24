import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  email: string;
  password: string;
  confirmPassword: string;
}

interface IPostSignup {
  email: string;
  password: string;
  confirmPassword: string;
}

export const postSignup = createAsyncThunk(
  "/auth/signup",
  async (payload: IPostSignup) => {
    try {
      const { email, password, confirmPassword } = payload;
      console.log(email, password, confirmPassword);
      // const createUserResponse = await fetch("http://localhost:8000/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //     confirmPassword,
      //   }),
      // });

      // if (createUserResponse.status === 422) {
      //   throw new Error("Validation failed, make sure the email address isn't used yet");
      // }

      // if (createUserResponse.status !== 200 && createUserResponse.status !== 201) {
      //   throw new Error("Creating a user failed!")
      // }

      // console.log(createUserResponse);
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
    builder.addCase(postSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postSignup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postSignup.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
