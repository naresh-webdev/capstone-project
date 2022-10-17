import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { CartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {CartItems.length ? (
          CartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>

      <Link to={"/checkout"}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
