import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const cartItem = this.props.cartItem;
    cartItem.price = 0;

    return (
      <article className="cartItem">
        <header>
          <img alt={cartItem.name} src={cartItem.image} />
          <h4>{cartItem.name}</h4>
          <span className="quantity">Quantity: {cartItem.quantity}</span>
        </header>
        <footer>
          <p>Price per item: {cartItem.price}</p>
          <button className="raisePrice" onClick={this.handleRaisePrice}>+</button>
          <button className="lowerPrice" onClick={this.handleLowerPrice}>-</button>
        </footer>
      </article>
    );
  };

  handleRaisePrice = event => {
    
  };

  handleLowerPrice = event => {
    
  };
};

export default CartItem;