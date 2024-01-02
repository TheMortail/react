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
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/AuthSelector';
import { registerUser } from '../../store/auth/AuthSlice';
import { useNavigate } from 'react-router';
const RegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUser);
  const navigate = useNavigate();
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
    if (users.filter((user) => user.username === data.username).length === 0) {
      dispatch(
        registerUser({
          username: data.username,
          password: data.password,
          email: data.email,
        }),
      );
      navigate('/Login', { replace: true });
    } else {
      alert('User already exists!');
    }
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
