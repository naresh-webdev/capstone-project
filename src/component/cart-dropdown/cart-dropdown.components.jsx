import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { CartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Link to={"/checkout"}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
