import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../context/CartContext";
import { CartItem } from "../models/Cart.model";

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2>Shopping Cart</h2>
      {cart?.map((item) => (
        <div key={item._id} className="flex items-center justify-between">
          <p>
            {item.productName} (x{item.quantity})
          </p>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
