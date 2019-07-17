import React, { Component } from 'react';

import CartItem from './CartItem.js';

class Cart extends Component {
  render() {
    return (
      <section className="cart">
        {Object.values(this.props.cart).map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })}
      </section>
    );
  };
}

export default Cart;