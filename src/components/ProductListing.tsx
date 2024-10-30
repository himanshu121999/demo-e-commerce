import React, { Suspense, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const ProductListing: React.FC = () => {
  const { data: products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-4 gap-4 p-6">
        {(filteredProducts || products)?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Suspense>
  );
};

export default ProductListing;
