import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="checkout-item-image">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <div className="checkout-item-name">
        <h2>{cartItem.name}</h2>
      </div>
      <div className="checkout-item-quant-clicker">
        <h2 onClick={() => removeItemFromCart(cartItem)}>left</h2>
        <span>{cartItem.quantity}</span>
        <h2 onClick={() => addItemToCart(cartItem)}>right</h2>
      </div>
      <div className="checkout-item-total-price">
        <h2>{cartItem.price * cartItem.quantity}</h2>
      </div>
      <div className="checkout-item-remove-button">
        <span onClick={() => clearItemFromCart(cartItem)}>X</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
