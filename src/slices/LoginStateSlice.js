import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  email: "",
};

export const LoginStateSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    logOutUser: (state) => {
      state.userLoggedIn = false;
      state.email = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLoggedIn, logOutUser } = LoginStateSlice.actions;

export default LoginStateSlice.reducer;
