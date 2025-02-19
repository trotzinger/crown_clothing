import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-detials">
        <span className="name">{name}</span>
      </div>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  );
};

export default CartItem;
