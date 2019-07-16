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
        <p className="description">{product.description}</p>
        <aside className="priceAndQuantity">
          <span>Price: {product.price} | In stock: {product.quantity}</span>
        </aside>
        <footer>
          <button className="addToCart" onClick={this.addToCart}>Add</button>
        </footer>
      </article>
    );
  };

  addToCart = event => {
    
  };
};

export default Product;