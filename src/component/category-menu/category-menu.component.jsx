import "./category-menu.styles.scss";

import DirectoryItem from "../directory-item/directory-item.component";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
