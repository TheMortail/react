import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  schemaFormDefaultValue,
  validationSchema,
  ValidationSchema,
} from './RegisterFormContainer.schema';
import TextInputConponent from '../../components/InputFields/TextInputConponent';
import CheckBoxInputComponent from '../../components/InputFields/CheckBoxInputComponent';
import ButtonComponent from '../../components/InputFields/ButtonComponent';
const RegisterFormContainer = () => {
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
      <h1>Regisztralas</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputConponent
          {...register('username')}
          label={'Username'}
          errorMessage={errors['username']?.message}
          required
        />
        <TextInputConponent
          {...register('email')}
          type={'email'}
          label={'email'}
          errorMessage={errors['email']?.message}
          required
        />
        <TextInputConponent
          {...register('password')}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <TextInputConponent
          {...register('passwordAgain')}
          type={'password'}
          label={'password again'}
          errorMessage={errors['passwordAgain']?.message}
          required
        />
        <CheckBoxInputComponent
          {...register('accept')}
          label={'Do you agree with the terms?'}
          errorMessage={errors['accept']?.message}
          required
        />
        <ButtonComponent type={'submit'}>Register</ButtonComponent>
      </form>
    </>
  );
};

export default RegisterFormContainer;
