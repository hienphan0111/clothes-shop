import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({

});

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);
  const val = { products, setProducts };
  return (
    <ProductContext.Provider value={val}>{children}</ProductContext.Provider>
  );
}
