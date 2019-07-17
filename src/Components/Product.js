import React, { Component } from 'react';

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <article className="product" data-id={product.id}>
        <header>
          <img alt={product.name} src={product.image} />
          <h4>{product.name}</h4>
        </header>
        <footer>
          <p>Cart:</p>
          <button className="addToCart" onClick={this.handleAddToCart}>+</button>
          <button className="removeFromCart" onClick={this.handleRemoveFromCart}>-</button>
        </footer>
      </article>
    );
  };

  handleAddToCart = event => {
    this.props.addToCart(this.props.product);
  };

  handleRemoveFromCart = event => {
    this.props.removeFromCart(this.props.product);
  };
};

export default Product;