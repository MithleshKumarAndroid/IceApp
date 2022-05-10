import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/loginSlice";
import UserLogin from "./reducer/loginSlice";
import UserRegister from "./reducer/RegisterSlice";
import thunkMiddleware from 'redux-thunk';
import ForgotSlice from "./reducer/ForgotSlice";



export const store =configureStore({
  reducer: {
    login: loginSlice,
    UserLogin: UserLogin,
    UserRegister:UserRegister,
    ForgotSlice:ForgotSlice
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;