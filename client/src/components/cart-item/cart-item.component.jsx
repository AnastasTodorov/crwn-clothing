import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item"/>
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem);