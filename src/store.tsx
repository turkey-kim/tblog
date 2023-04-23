import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  loginStatus: boolean;
}

const initialState: LoginState = {
  loginStatus: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loginStatus = action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
