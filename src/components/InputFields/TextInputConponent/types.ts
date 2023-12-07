import { RegisterReturnType } from '../../../common/types';

export type InputType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number';
};
