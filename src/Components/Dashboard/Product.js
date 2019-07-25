import React, { Component } from 'react';

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <article className="product">
        <header>
          <img alt={product.name} src={product.image} />
          <h4>{product.name}</h4>
        </header>
        <footer>
          <button onClick={this.handleChangeCart}>+</button>
          <span> Quantity </span>
          <button onClick={this.handleChangeCart}>-</button>
        </footer>
      </article>
    );
  };

  handleChangeCart = event => {
    let add = true;
    if (event.target.innerHTML === "-") add = false;

    this.props.changeCart(this.props.product.id, add);
  };
};

export default Product;