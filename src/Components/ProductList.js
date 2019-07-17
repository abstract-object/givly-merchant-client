import React, { Component } from 'react';

import Product from './Product.js';

class ProductList extends Component {
  render() {
    return (
      <section className="products">
        {Object.values(this.props.products).map(product => {
          return <Product key={product.id} product={product} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        })}
      </section>
    );
  }
}

export default ProductList;