import CategoryItem from "./category-item/category-item.component";

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
}

export default Categories;