import { configureStore } from "@reduxjs/toolkit";
import memberEligibilityFormReducer from "./slices/memberEligibilityFormSlice";
import LoginStateReducer from "./slices/LoginStateSlice";

export const store = configureStore({
  reducer: {
    memberEligibilityForm: memberEligibilityFormReducer,
    loginState: LoginStateReducer,
  },
});
