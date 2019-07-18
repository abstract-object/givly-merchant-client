import React, { Component } from 'react';

import CartItem from './CartItem.js';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
  };

  render() {
    return (
      <section className="cart">
        <input className="recipientId" placeholder="Recipient ID" />
        {Object.values(this.props.cart).map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} addRowPrice={this.addRowPrice} />
        })}
        <p>Total: {this.state.totalPrice}</p>
        <button className="checkout">Checkout</button>
      </section>
    );
  };

  addRowPrice = (add) => {
    let price = -1;
    if (add) price = 1;
    const newTotal = this.state.totalPrice + price;
    this.setState({totalPrice: newTotal});
  }

};

export default Cart;