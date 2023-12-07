import { RegisterReturnType } from '../../../common/types';

export type CheckboxType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
};
