import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    reduceCartItem,
    totalPrice,
    addItemToCart,
    removeItemToCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (isCartOpen) setIsCartOpen(false);
  }, []);

  return (
    <div>
      <h1>cart page</h1>
      {CartItems.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt="imageUrl" />;<p>{item.name}</p>
          <p>
            <span
              onClick={() => {
                removeItemToCart(item);
              }}
            >
              &#8592;
            </span>
            {item.quantity}
            <span
              onClick={() => {
                addItemToCart(item);
              }}
            >
              {" "}
              &#8594;{" "}
            </span>
          </p>
          <p>x</p>
          <p>{item.price}</p>
        </div>
      ))}

      <p>{totalPrice}</p>
    </div>
  );
};

export default Checkout;
