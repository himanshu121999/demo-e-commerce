import React from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { cartState } from "../context/CartContext";
import { toast } from "react-toastify";
import { CartItem } from "../models/Cart.model";
import { Product } from "../models/Product.model";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

  const isExistInCart =
    cart?.findIndex((cartItem) => cartItem._id === product?._id) > -1;

  const addToCart = () => {
    if (isExistInCart) {
      const newCart = cart?.map((cartItem) => {
        if (cartItem._id === product?._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to cart!");
  };

  const removeCart = () => {
    setCart((prev) => prev?.filter((item) => item?._id !== product?._id));
    toast.success("Product removed from cart!");
  };

  return (
    <motion.div className="p-2 bg-white border rounded-md shadow ">
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="w-full rounded"
      />
      <h2 className="text-lg font-medium text-gray-500">
        {product.productName}
      </h2>
      <p className="font-medium text-gray-500">${product.price}</p>
      <button
        onClick={isExistInCart ? removeCart : addToCart}
        className="w-full px-4 py-1 mt-2 font-medium transition-all duration-500 border rounded-md text-rose-400 border-rose-400 hover:bg-rose-400 hover:text-white"
      >
        {isExistInCart ? "Remove" : "Add to cart"}
      </button>
    </motion.div>
  );
};

export default ProductCard;
