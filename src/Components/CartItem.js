import React, { Component } from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
  };

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
          <p>Price per item: {this.state.price}</p>
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

    this.changePrice(add);
  };

  changePrice = (add) => {
    let amount = -1;
      
    if (add) {
      amount = 1;
    }

    let newPrice = this.state.price + amount;
    if (newPrice < 0) newPrice = 0;

    this.setState({price: newPrice});
    this.props.addRowPrice(add);
  };
};

export default CartItem;