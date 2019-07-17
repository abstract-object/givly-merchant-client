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
        <div className="container">
          <section className="row">
            <section className="col">
              <SearchBar />
              <ProductList products={this.props.products} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
            </section>
            <section className="col">
              <Cart cart={this.props.cart} />
            </section>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;