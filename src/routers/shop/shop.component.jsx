import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../component/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default Shop;
