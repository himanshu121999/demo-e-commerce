import { useQuery } from "react-query";
import axios from "axios";
import { Product } from "../models/Product.model";

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("http://localhost:5000/products");
  return data;
};

export const useProducts = () => {
  return useQuery<Product[]>("products", fetchProducts, {
    suspense: true,
  });
};
