// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  AddItemAction,
  CartItem,
  CartState,
  DeleteItemAction,
  ModifyQuantityOfItem,
} from './types';

export const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    buy: () => {
      return initialState;
    },
    addItem: (state, action: AddItemAction) => {
      const existingItem = state.items.filter(
        (item) => item.id === action.payload.id,
      )[0];
      if (existingItem !== undefined) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      } else {
        const newItem: CartItem = {
          id: action.payload.id,
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price,
          image: action.payload.image,
          description: action.payload.description,
        };
        state.items.push(newItem);
      }
    },
    deleteItem: (state, action: DeleteItemAction) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    modifyQuantityOfItem: (state, action: ModifyQuantityOfItem) => {
      if (action.payload.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        );
      }
    },
  },
});
export const { addItem, buy, deleteItem, modifyQuantityOfItem } =
  CartSlice.actions;
export const CartReducer = CartSlice.reducer;
