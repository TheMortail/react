import { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
};

export type AddItemAction = PayloadAction<{
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
}>;

export type DeleteItemAction = PayloadAction<{
  id: number;
}>;

export type ModifyQuantityOfItem = PayloadAction<{
  id: number;
  quantity: number;
}>;

export type CartState = {
  items: CartItem[];
};
