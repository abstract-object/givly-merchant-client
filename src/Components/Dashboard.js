import React, { Component } from 'react';

import Header from './Header.js';
import SearchBar from './SearchBar.js';
import ProductList from './ProductList.js';
import Footer from './Footer.js';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ProductList products={this.props.products} />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;