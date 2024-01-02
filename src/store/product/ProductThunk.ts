import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';

import api from '../../api';
import { GetProductsPayload, Product, RejectPayload } from './types';

export const getProductsThunk = createAsyncThunk<
  GetProductsPayload,
  void,
  RejectPayload
>('product/getProducts', async (_args, thunkAPI) => {
  try {
    const response = await api.get<void, AxiosResponse<Product[]>>('/products');
    return { products: response.data };
  } catch (e: unknown) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error?.message || '');
  }
});
