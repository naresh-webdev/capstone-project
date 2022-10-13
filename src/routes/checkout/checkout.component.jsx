import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { isCartOpen, setIsCartOpen, CartItems, totalPrice } =
    useContext(CartContext);

  useEffect(() => {
    if (isCartOpen) setIsCartOpen(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {CartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
