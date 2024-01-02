import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/CartSelector';
import CartCardComponent from '../../components/CartCardComponent';
import CartTotalComponent from '../../components/CartTotalComponent';

const CartContainer = () => {
  const items = useSelector(selectCart);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
        {items.map((product) => (
          <CartCardComponent key={product.id} {...product} />
        ))}
      </div>
      <hr style={{ margin: '50px 0' }} />
      <CartTotalComponent />
    </>
  );
};

export default CartContainer;
