import Button from '../button/button.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))
        }
      </div>
      <Button>Add item</Button>
    </div>
  )
}

export default CartDropdown;