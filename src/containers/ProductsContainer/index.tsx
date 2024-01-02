import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { productsSelector } from '../../store/product/ProductsSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getProductsThunk } from '../../store/product/ProductThunk';
import ProductCardComponent from '../../components/ProductsCardComponent';
import { reset } from '../../store/product/ProductSlice';

const ProductsContainer: FC = () => {
  const { products, loading } = useSelector(productsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetOrFetch = () => {
    dispatch(products.length ? reset() : getProductsThunk());
  };

  if (loading) {
    return <h2>Please wait...</h2>;
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
        {products.map((product) => (
          <ProductCardComponent key={product.id} {...product} />
        ))}
      </div>
      <button onClick={handleResetOrFetch}>
        {products.length ? 'RESET' : 'FETCH'}
      </button>
    </>
  );
};

export default ProductsContainer;
