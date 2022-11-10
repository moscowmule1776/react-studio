import React from 'react'

const CartItems = (props) => {
  const addToCart = (item) => {
    return (
      <code><strong>x{props.count.current[item.name]}</strong> {item.name} (${item.price} each)<br></br><br></br></code>
    );
  };
  const cart = props.cart
  const cartList = cart.map(addToCart)
  return <code>{cartList}</code>
}

export default CartItems;
