import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";

import { getCollectionAndDocuments } from "../utilities/firebase/firebase.utillities.js";

export const ProductsContext = createContext({
  Products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { Products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
