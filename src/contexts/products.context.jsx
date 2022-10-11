import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  Products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState(PRODUCTS);
  const value = { Products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
