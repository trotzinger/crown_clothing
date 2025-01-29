import CategoryItem from "../category-item/category-item.componet";

import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-menu-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;
