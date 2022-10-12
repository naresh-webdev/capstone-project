import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { Products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
