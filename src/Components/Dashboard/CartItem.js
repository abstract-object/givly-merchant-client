import React, {Component} from "react";

class CartItem extends Component {
  handleChangePrice = event => {
    let add = true;
    if (event.target.innerHTML === "-") add = false;

    this.props.changePrice(this.props.cartItem.id, add);
  };

  render() {
    const cartItem = this.props.cartItem;
    const rowPrice = cartItem.price * cartItem.quantity;

    return (
      <article className="cartItem">
        <header>
          <img alt={cartItem.name} src={cartItem.image}/>
          <h4>{cartItem.name}</h4>
          <span className="quantity">Quantity: {cartItem.quantity}</span>
        </header>
        <footer>
          <p>Price per item: {cartItem.price}</p>
          <button onClick={this.handleChangePrice}>+</button>
          <span> Price </span>
          <button onClick={this.handleChangePrice}>-</button>
          <br/>
          <p>Row price: {rowPrice}</p>
        </footer>
      </article>
    );
  };
};

export default CartItem;