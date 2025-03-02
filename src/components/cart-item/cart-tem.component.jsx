import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
      </ItemDetails>
      <Price>
        {quantity} x ${price}
      </Price>
    </CartItemContainer>
  );
};

export default CartItem;
