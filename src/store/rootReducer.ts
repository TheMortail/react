import { combineReducers } from 'redux';
import { AuthReducer } from './auth/AuthSlice';
import { CartReducer } from './cart/CartSlice';
import { ProductReducer } from './product/ProductSlice';

const rootReducer = combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  product: ProductReducer,
});

export default rootReducer;
