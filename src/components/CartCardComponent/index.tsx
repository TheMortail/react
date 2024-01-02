import { FC } from 'react';
import { CartCardComponentProps } from './types';
import classes from './CartCardComponent.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteItem, modifyQuantityOfItem } from '../../store/cart/CartSlice';
import { validationSchema, ValidationSchema } from './CartCardComponent.schema';
import TextInputConponent from '../InputFields/TextInputConponent';
import ButtonComponent from '../InputFields/ButtonComponent';

const CartCardComponent: FC<CartCardComponentProps> = (props) => {
  const { id, name, price, image, description, quantity } = props;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      quantity: quantity,
    },
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    dispatch(
      modifyQuantityOfItem({
        id: id,
        quantity: data.quantity,
      }),
    );
    alert('Item modified.');
  };

  function handleDelete() {
    dispatch(
      deleteItem({
        id: id,
      }),
    );
    alert('Item deleted from the cart.');
  }

  return (
    <div className={classes.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={image} alt={name} className={classes.cardImage} />
        <div className={classes.cardContent}>
          <h2 className={classes.cardTitle}>{name}</h2>
          <p className={classes.cardDescription}>{description}</p>
          <div className={classes.cardDetails}>
            <span className={classes.cardId}>ID: {id}</span>
            <span className={classes.cardPrice}>${price}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <span className={classes.cardId}>Mennyiseg:</span>
            <TextInputConponent
              {...register('quantity')}
              type={'number'}
              label={'quantity'}
              errorMessage={errors['quantity']?.message}
              required
              style={{ width: '25px' }}
            />
            <ButtonComponent type={'submit'}>Mentes</ButtonComponent>
            <ButtonComponent onClick={handleDelete}>Torles</ButtonComponent>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartCardComponent;
