import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const cartIconToogler = (e) => {
    const dropDownContainer = document.querySelector(
      ".cart-dropdown-container"
    );
    dropDownContainer.classList.toggle("hidden");
  };

  return (
    <div className="cart-icon-container" onClick={cartIconToogler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
