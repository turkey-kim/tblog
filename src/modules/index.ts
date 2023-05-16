import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedin";
import userProfile from "./userProfile";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isLoggedIn", "userProfile"],
};

const rootReducer = combineReducers({
  isLoggedIn,
  userProfile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
