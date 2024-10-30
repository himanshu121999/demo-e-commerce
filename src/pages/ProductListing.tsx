import { Suspense } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/Product.model";

const ProductListing = ({ products }: { products: Product[] }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {products?.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-7 md:grid-cols-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-xl text-slate-500">
          No Product Found!
        </div>
      )}
    </Suspense>
  );
};

export default ProductListing;
