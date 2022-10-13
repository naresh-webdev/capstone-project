import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    totalPrice,
    addItemToCart,
    removeItemToCart,
  } = useContext(CartContext);

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
      {CartItems.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt="imageUrl" />;<p>{item.name}</p>
          <p>
            <span onClick={() => removeItemToCart(item)}>&#8592;</span>
            {item.quantity}
            <span onClick={() => addItemToCart(item)}> &#8594; </span>
          </p>
          <p>x</p>
          <p>{item.price}</p>
        </div>
      ))}

      <span className="Total">Total: {totalPrice}</span>
    </div>
  );
};

export default Checkout;
