import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import {
  Container,
  Header,
  Block,
  BlockLastChild,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { isCartOpen, setIsCartOpen, CartItems, totalPrice } =
    useContext(CartContext);

  useEffect(() => {
    if (isCartOpen) setIsCartOpen(false);
  }, []);

  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <BlockLastChild>
          <span>Remove</span>
        </BlockLastChild>
      </Header>
      {CartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total as="span">Total: ${totalPrice}</Total>
    </Container>
  );
};

export default Checkout;
