import { atom } from "recoil";
import { CartItem } from "../models/Cart.model";

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});
