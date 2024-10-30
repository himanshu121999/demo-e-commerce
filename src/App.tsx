import React, { useEffect, useState } from "react";
import ProductListing from "./pages/ProductListing";
import Notification from "./components/Notification";
import AppBar from "./components/AppBar";
import { IconSearch } from "@tabler/icons-react";
import { useProducts } from "./hooks/useProducts";

const App: React.FC = () => {
  const { data: products } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products?.filter((p) =>
        p.productName.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <>
      <Notification />

      <div className="flex flex-col w-screen h-screen overflow-auto">
        {/* App Bar */}
        <div>
          <AppBar />
        </div>

        <div className="flex flex-col flex-1 gap-4 p-4 overflow-auto bg-gray-50">
          {/* Search */}
          <div className="w-[600px] px-4 border shadow flex gap-4 rounded-md items-center bg-white">
            <IconSearch className="text-slate-500" />
            <input
              type="text"
              className="w-full py-2 outline-none "
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target?.value)}
            />
          </div>

          {/* Product Listing */}
          <div className="flex-1 h-full overflow-auto ">
            <ProductListing products={filteredProducts || []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
