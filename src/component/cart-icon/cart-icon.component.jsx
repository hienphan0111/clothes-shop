import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleIsCartOpen} className="shopping-icon">{cartCount}</ShoppingIcon>
    </div>
  );
};

export default CartIcon;