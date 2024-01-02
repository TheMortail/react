import { RootState } from '../index';
import { ProductSelector } from './types';

export const productsSelector = (state: RootState): ProductSelector => ({
  products: state.product.products,
  loading: state.product.loading,
});
