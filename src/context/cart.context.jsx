import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {

  const existingCardItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if(existingCardItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1}
      : cartItem)
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setItemtoCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const val = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return (
    <CartContext.Provider value={val}>{children}</CartContext.Provider>
  );
};
