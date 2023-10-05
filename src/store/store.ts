import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
