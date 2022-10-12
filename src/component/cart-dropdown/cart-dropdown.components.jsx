import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { CartItems } = useContext(CartContext);

  console.log(CartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
