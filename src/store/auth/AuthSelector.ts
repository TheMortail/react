import { RootState } from '../index';

export const selectUser = (state: RootState) => state.auth.users;

export const selectLoggedInUser = (state: RootState) => state.auth.loggedInUser;
