import { PayloadAction } from '@reduxjs/toolkit';

export type User = {
  username: string;
  password: string;
  email: string;
};

export type RegisterUserAction = PayloadAction<{
  username: string;
  password: string;
  email: string;
}>;

export type LoginUserAction = PayloadAction<{
  username: string;
}>;

export type AuthState = {
  users: User[];
};
