import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  schemaFormDefaultValue,
  validationSchema,
  ValidationSchema,
} from './RegisterFormContainer.schema';
import TextInputConponent from '../../components/InputFields/TextInputConponent';
import ButtonComponent from '../../components/InputFields/ButtonComponent';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/AuthSelector';
import { loginUser } from '../../store/auth/AuthSlice';
const LoginFormContainer = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: schemaFormDefaultValue,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    if (
      users.filter(
        (user) =>
          user.username === data.username && user.password === data.password,
      ).length === 1
    ) {
      dispatch(loginUser({ username: data.username }));
      navigate('/', { replace: true });
    } else {
      alert("User doesn't exists!");
    }
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
