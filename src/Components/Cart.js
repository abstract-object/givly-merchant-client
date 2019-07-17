import React, { Component } from 'react';

import CartItem from './CartItem.js';

class Cart extends Component {
  render() {
    return (
      <section className="cart">
        <input className="recipientId" placeholder="Recipient ID" />
        {Object.values(this.props.cart).map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })}
        <p>Total:</p>
        <button className="checkout">Checkout</button>
      </section>
    );
  };
}

export default Cart;