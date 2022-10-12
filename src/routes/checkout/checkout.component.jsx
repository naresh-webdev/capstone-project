import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

const Checkout = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    reduceCartItem,
    increaseCartItem,
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
                reduceCartItem(item);
              }}
            >
              &#8592;
            </span>
            {item.quantity}
            <span
              onClick={() => {
                increaseCartItem(item);
              }}
            >
              {" "}
              &#8594;{" "}
            </span>
          </p>
          <p>{item.price}</p>
          <p>x</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
