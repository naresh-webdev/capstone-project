import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";

// import { addCollectionAndDocuments } from "../utilities/firebase/firebase.utillities.js";

export const ProductsContext = createContext({
  Products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { Products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
