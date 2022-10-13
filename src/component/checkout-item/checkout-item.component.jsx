import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { removeItemToCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="checkout item image" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemToCart(cartItem, true)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
