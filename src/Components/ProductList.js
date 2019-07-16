import React, { Component } from 'react';

import Product from './Product.js';

class ProductList extends Component {
  render() {
    return (
      <section className="products">
        {this.props.products.map(product => {
          return <Product key={product.id} product={product} />
        })}
      </section>
    );
  }
}

export default ProductList;