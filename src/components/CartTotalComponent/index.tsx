import { Control, useWatch } from 'react-hook-form';
import { FC } from 'react';
import { FieldArrayFormValues } from '../../containers/ItemsContainer/ItemsContainer.schema';

const Total: FC<{ control: Control<FieldArrayFormValues> }> = ({ control }) => {
  const formValues = useWatch({
    name: 'cart',
    control,
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0,
  );
  return <p>Total Amount: {total}</p>;
};

export default Total;
