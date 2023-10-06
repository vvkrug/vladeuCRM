import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import productReducer from '../features/productSlice';
import todosReducer from '../features/todosSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    todos: todosReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
