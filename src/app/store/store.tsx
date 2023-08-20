import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux'
import CartSlice from "./CartSlice";
// import storage from "redux-persist/lib/storage";
// import {persistReducer,persistStore  } from'redux-persist'
// const persistConfig = {
//   key: 'root',
//   storage
// }



// const persistedReducer = persistReducer(persistConfig, cartSlice)
export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

// export const presistore=persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;







  
