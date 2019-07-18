import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import Header from './Header.js';
import SearchBar from './SearchBar.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import Footer from './Footer.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cart: {}, 
      products: {
        1: {
          id: 1,
          image: "http://harboarts.com/shirtdesigner/jpg_design_exports/loaf-of-bread-vector-graphics_template_1434971128379T0A.jpg",
          name: "Generic bread",
          price: 1
        }
      },
      totalPrice: 0
    };
  };

  render() {
    return (
      <div>
        <Header />
          <Container>
            <Row>
              <Col>
                <SearchBar />
                <ProductList products={this.state.products} changeCart={this.changeCart} />
              </Col>
              <Col>
                <Cart cart={this.state.cart} totalPrice={this.state.totalPrice} changePrice={this.changePrice} />
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  };

  changeCart = (id, add) => {
    this.setState(prevState => {
      const cart = Object.assign({}, prevState.cart);
      let totalPrice = prevState.totalPrice;

      let amount = -1;
      
      if (add) {
        amount = 1;
      }

      cart[id] = this.state.products[id];

      if (cart[id].quantity) {
        cart[id].quantity += amount;
      } else if (add) {
        cart[id].quantity = 1;
      }

      if (!cart[id].quantity || cart[id].quantity <= 0) delete cart[id];

      totalPrice = this.updateTotalPrice();
      
      return { cart, totalPrice };
    });
  };

  changePrice = (id, add) => {
    this.setState(prevState => {
      const cart = Object.assign({}, prevState.cart);
      let totalPrice = prevState.totalPrice;

      let amount = -1;
      
      if (add) {
        amount = 1;
      }

      let newPrice = cart[id].price + amount;
      if (newPrice < 0) newPrice = 0;
      cart[id].price = newPrice;

      totalPrice = this.updateTotalPrice();
      
      return { cart, totalPrice };
    });
  };

  updateTotalPrice = () => {
    return Object.values(this.state.cart).reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0)
  };
};

export default Dashboard;