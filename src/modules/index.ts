import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedin";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isLoggedIn"],
};

const rootReducer = combineReducers({
  isLoggedIn,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
