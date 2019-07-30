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

  handleOnKeyDown = event => {
    if (event.key === "Enter") this.props.displayBalance(this.state.recipientId);
  };
  
  render() {
    return (
      <section className="cart">
        {this.props.loading && <span>Doing crypto magic...</span>}
        {(this.props.status && this.props.status[0] === "cart") && <span>{this.props.status[1]}</span>}
        {(this.props.status && this.props.status[0] === "error") && <span>{this.props.status[1]}</span>}
        <div className="cart-content">
        <input className="recipientId" name="recipientId" placeholder="Recipient ID" value={this.state.recipientId || ""} onChange={this.handleChange} onKeyDown={this.handleOnKeyDown}/>
        {this.props.balance !== null && <h5>Recipient Balance: {this.props.balance} Giv{this.props.balance > 1 && "s"}</h5>}
        <h5>Total: {this.props.totalPrice} Giv{this.props.totalPrice > 1 && "s"}</h5>
        <button className="checkout" onClick={this.handleClick}>Checkout</button>
        {Object.values(this.props.cart).map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} changePrice={this.props.changePrice} clearItem={this.props.clearItem}/>
        })}
        </div>
      </section>
    );
  };
};

export default Cart;