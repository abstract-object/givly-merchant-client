import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const cartItem = this.props.cartItem;

    return (
      <article className="cartItem">
        <header>
          <img alt={cartItem.name} src={cartItem.image} />
          <h4>{cartItem.name}</h4>
          <span className="quantity">Quantity: {cartItem.quantity}</span>
        </header>
        <footer>
          <p>Price per item: {cartItem.price}</p>
          <button onClick={this.handleChangePrice}>+</button>
          <span> Price </span>
          <button onClick={this.handleChangePrice}>-</button>
        </footer>
      </article>
    );
  };

  handleChangePrice = event => {
    let add = true;
    if (event.target.innerHTML === "-") add = false;

    this.props.changePrice(this.props.cartItem.id, add);
  };
};

export default CartItem;