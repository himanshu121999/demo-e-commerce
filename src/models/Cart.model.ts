import { Product } from "./Product.model";

export type CartItem = {
  quantity: number;
} & Product;
