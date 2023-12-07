import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FieldArrayFormValues,
  fieldArrayValidationSchema,
} from './ItemsContainer.schema';
import ItemCardComponent from '../../components/ItemCardComponent';
import TextInputConponent from '../../components/InputFields/TextInputConponent';
import ButtonComponent from '../../components/InputFields/ButtonComponent';
import { useNavigate } from 'react-router';

const FieldArrayContainer = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldArrayFormValues>({
    defaultValues: {
      cart: [
        { name: 'kiscica', quantity: 1, price: 10 },
        { name: 'kiskutya', quantity: 1, price: 20 },
        { name: 'utvefuro', quantity: 1, price: 30 },
      ],
    },
    resolver: zodResolver(fieldArrayValidationSchema),
    mode: 'onBlur',
  });
  const { fields } = useFieldArray({
    name: 'cart',
    control,
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldArrayFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleAdd = (index: number): void => {
    navigate('/under-construction', { replace: true });
  };

  return (
    <>
      <h2>Field Array</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <ItemCardComponent
              title={`#${index} id: ${field.id}`}
              key={field.id}>
              <section className={'section'} key={field.id}>
                Name:
                <TextInputConponent
                  label={'name'}
                  {...register(`cart.${index}.name` as const)}
                  errorMessage={errors?.cart?.[index]?.name?.message}
                  disabled={true}
                />
                Price:
                <TextInputConponent
                  label={'value'}
                  type={'number'}
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.price?.message}
                  disabled={true}
                />
                Quantity:
                <TextInputConponent
                  label={'quantity'}
                  type="number"
                  {...register(`cart.${index}.quantity` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.quantity?.message}
                />
                <ButtonComponent type="button" onClick={() => handleAdd(index)}>
                  Add to cart
                </ButtonComponent>
              </section>
            </ItemCardComponent>
          );
        })}
      </form>
    </>
  );
};

export default FieldArrayContainer;
