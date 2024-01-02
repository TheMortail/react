import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/CartSelector';
import PontButtonComponent from '../InputFields/ButtonComponent';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { buy } from '../../store/cart/CartSlice';

const CartTotalComponent = () => {
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });

    return totalPrice;
  };

  function handlePayment() {
    if (getTotal() <= 0) {
      alert('A kosar ures.');
    } else {
      dispatch(buy());
      alert('Kifizetve.');
    }
  }

  return (
    <>
      <p>Teljes osszeg: ${getTotal()}</p>
      <PontButtonComponent onClick={handlePayment}>Fizetes</PontButtonComponent>
    </>
  );
};

export default CartTotalComponent;
