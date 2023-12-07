import {SubmitHandler, useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  schemaFormDefaultValue,
  validationSchema,
  ValidationSchema,
} from './RegisterFormContainer.schema';
import TextInputConponent from '../../components/InputFields/TextInputConponent';
import ButtonComponent from '../../components/InputFields/ButtonComponent';
const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: schemaFormDefaultValue,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <h1>Bejelentkezes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputConponent
          {...register('username')}
          type={'text'}
          label={'username'}
          errorMessage={errors['username']?.message}
          required
        />
        <TextInputConponent
          {...register('password')}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <ButtonComponent type={'submit'}>Login</ButtonComponent>
      </form>
    </>
  );
};

export default LoginFormContainer;
