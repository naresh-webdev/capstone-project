import "./category.styles.scss";

import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";

import ProductCard from "../../component/product-card/product-card.component";

const Category = () => {
  const { Category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[Category]);

  useEffect(() => {
    setProducts(categoriesMap[Category]);
  }, [Category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
