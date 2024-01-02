import { FC } from 'react';
import { ProductCardComponentProps } from './types';
import classes from './ProductsCardComponent.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addItem } from '../../store/cart/CartSlice';
import {
  schemaFormDefaultValue,
  validationSchema,
  ValidationSchema,
} from './ProductsCardComponent.schema';
import TextInputConponent from '../InputFields/TextInputConponent';
import ButtonComponent from '../InputFields/ButtonComponent';

const ProductCardComponent: FC<ProductCardComponentProps> = (props) => {
  const { id, name, price, image, description } = props;
  const dispatch = useAppDispatch();
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
    dispatch(
      addItem({
        id: id,
        name: name,
        quantity: data.quantity,
        price: price,
        image: image,
        description: description,
      }),
    );
    alert(data.quantity + ' Item added to the cart.');
  };

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
            <ButtonComponent type={'submit'}>Kosarba</ButtonComponent>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCardComponent;
