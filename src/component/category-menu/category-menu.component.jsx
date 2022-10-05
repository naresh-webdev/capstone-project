import "./category-menu.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
