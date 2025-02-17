import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-items-container">
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.name} cartItem={cartItem} />;
      })}
    </div>
  );
};

export default Checkout;
