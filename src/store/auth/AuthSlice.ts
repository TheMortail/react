// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { LoginUserAction, RegisterUserAction, User } from './types';

export const initialState = {
  users: [{ username: 'user', password: 'user', email: 'email@pont.com' }],
  loggedInUser: {
    loggedIn: false,
    username: '',
    email: '',
  },
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action: RegisterUserAction) => {
      const newUser: User = {
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      };
      state.users.push(newUser);
    },
    loginUser: (state, action: LoginUserAction) => {
      const user = state.users.filter(
        (filterUser) => filterUser.username === action.payload.username,
      )[0];
      if (user !== undefined) {
        state.loggedInUser.loggedIn = true;
        state.loggedInUser.username = user?.username;
        state.loggedInUser.email = user?.email;
      }
    },
  },
});
export const { registerUser, loginUser } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;
