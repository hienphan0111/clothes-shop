import './category-item.style.scss';

const CategoryItem = ({category}) => {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div className="background-image"
        style={{ backgroundImage:`url(${imageUrl})`}} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem;