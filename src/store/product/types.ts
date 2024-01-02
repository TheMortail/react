export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type GetProductsPayload = { products: Product[] };
export type RejectPayload = { rejectValue: string };

export type ProductsState = {
  products: Product[];
  loading: boolean;
  errorMessage?: string;
};

export type ProductSelector = {
  products: Product[];
  loading: boolean;
};
