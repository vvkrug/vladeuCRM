import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateToken } from "../helper/generateToken";

interface LoginState {
  isAuthenticated: boolean;
  isLogOut: boolean,
  error: string | null;
}

const initialState: LoginState = {
  isAuthenticated: false,
  isLogOut: true,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string, password: string }>) => {
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin') {
        const token = generateToken();
        console.log(token, "Ваш случайный токен:")
        localStorage.setItem("accessToken", token)
        state.isAuthenticated = true;
        state.isLogOut = false;
        console.log(state.isAuthenticated, "Ваш случайный токен:")
        state.error = null;
      } else {
        state.error = 'Ой.. при входе в систему что-то пошло не так.';
      }
    },
    logout: (state, action: PayloadAction<{isLogOut: Boolean}>) => {
      const {isLogOut} = action.payload;
      if(isLogOut) {
        localStorage.removeItem("accessToken")
        state.isLogOut = true;
        state.isAuthenticated = false;
        state.error = null;
      } else {
        state.error = 'Ой.. при входе в систему что-то пошло не так.'
      }
    }
  },
});

export const { login,logout } = loginSlice.actions;
export default loginSlice.reducer;
