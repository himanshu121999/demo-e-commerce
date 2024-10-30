import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import { CartItem } from "../models/Cart.model";
import { cartState } from "../context/CartContext";

type Props = {};

const AppBar = (props: Props) => {
  const [cart] = useRecoilState<CartItem[]>(cartState);

  return (
    <div className="flex justify-between p-4 bg-white border-b shadow">
      {/* Logo */}
      <div className="text-xl font-medium text-slate-700 "> E-commerce </div>

      {/* Cart */}
      <div className="relative">
        <IconShoppingCart className="text-slate-600" size={32} />

        <div className="absolute h-[25px] w-[25px] flex justify-center items-center rounded-full p-1 -top-3 -right-3 font-medium text-white bg-rose-400 ">
          {" "}
          {cart?.length}{" "}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
