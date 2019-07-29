import React, {Component} from "react";

import CartItem from "./CartItem.js";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipientId: null
    };
  };

  handleClick = event => {
    event.preventDefault();
    this.props.addTransaction(this.state.recipientId);
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      recipientId: event.target.value
    });
  };
  
  render() {
    return (
      <section className="cart">
        <input className="recipientId" name="recipientId" placeholder="Recipient ID" value={this.state.recipientId || ""} onChange={this.handleChange}/>
        {Object.values(this.props.cart).map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} changePrice={this.props.changePrice}/>
        })}
        <h5>Total: {this.props.totalPrice}</h5>
        <button className="checkout" onClick={this.handleClick}>Checkout</button>
      </section>
    );
  };
};

export default Cart;