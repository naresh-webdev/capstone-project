import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as Shoppingsvg } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCountItem } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCountItem}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
