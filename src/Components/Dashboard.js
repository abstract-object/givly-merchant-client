import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


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
          <Container>
            <Row>
              <Col>
                <SearchBar />
                <ProductList products={this.props.products} changeCart={this.props.changeCart} />
              </Col>
              <Col>
                <Cart cart={this.props.cart} />
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;