import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedin";

const rootReducer = combineReducers({
  isLoggedIn,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
