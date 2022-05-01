import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
import loginSlice from "./reducer/loginSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
