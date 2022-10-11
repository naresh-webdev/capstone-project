import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { Products } = useContext(ProductsContext);
  console.log(Products);

  return (
    <div>
      {Products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
