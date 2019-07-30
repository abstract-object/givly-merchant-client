import React, {Component} from "react";

class CartItem extends Component {
  handleChangePrice = event => {
    let add = true;
    if (event.target.innerHTML === "-") add = false;

    this.props.changePrice(this.props.cartItem.id, add);
  };

  clear = event => {
    this.props.clearItem(this.props.cartItem.id);
  };

  render() {
    const cartItem = this.props.cartItem;
    const rowPrice = cartItem.price * cartItem.quantity;

    return (
      <article className="cartItem">
        <header>
          <img alt={cartItem.name} src={cartItem.image}/>
        </header>
        <footer>
          <span><h5>{cartItem.name}</h5></span>
          <span className="quantity">Quantity: {cartItem.quantity}</span>
          {/* <p>Price per item: {cartItem.price}</p>
          <span>
            <button onClick={this.handleChangePrice}>+</button>
            <span> Price </span>
            <button onClick={this.handleChangePrice}>-</button>
            <br/>
          </span> */}
          <p>Price: {rowPrice} Giv{rowPrice > 1 && "s"}</p>
        </footer>
        <button onClick={this.clear} className="clear">×</button>
      </article>
    );
  };
};

export default CartItem;