import React, { Component } from 'react';

import Header from './Header.js';
import SearchBar from './SearchBar.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import Footer from './Footer.js';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ProductList products={this.props.products} addToCart={this.props.addToCart} />
        <Cart cart={this.props.cart} />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;