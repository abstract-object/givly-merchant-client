import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import Header from '../Header.js';
import SearchBar from './SearchBar.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import Footer from '../Footer.js';

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
        },
        2: {
          id: 2,
          image: "",
          name: "Generic pants",
          price: 1
        }
      },
      totalPrice: 0,
      recipientBalance: 0,
      status: null
    };
  };

  changeCart = (id, add) => {
    this.setState(prevState => {
      const status = (prevState.status && prevState.status[0] === "cart") ? null : prevState.status;
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

      totalPrice = this.updateTotalPrice(cart);
      
      return { cart, status, totalPrice };
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
      if (newPrice < 1) newPrice = 1;
      cart[id].price = newPrice;

      totalPrice = this.updateTotalPrice(cart);
      
      return { cart, totalPrice };
    });
  };

  addTransaction = recipientId => {
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `recipientCryptoId=${recipientId}`,
      mode: 'cors'
    }

    fetch(`${this.props.host}/merchant/verifyAccount`, options)
    .then((response) => {
      response.json()
      .then((data) => {
        this.setState({recipientBalance: data.balance});
        if (this.state.totalPrice > 0 && this.state.recipientBalance >= this.state.totalPrice) {
          const transaction = {
            totalPrice: this.state.totalPrice,
            merchantUuid: this.props.merchant.id,
            merchantCryptoId: this.props.merchant.cryptoId,
            recipientCryptoId: recipientId,
            products: []
          };
      
          Object.values(this.state.cart).forEach(cartItem => {
            transaction.products.push({
              productName: cartItem.name,
              price: cartItem.price * cartItem.quantity
            });
          });
      
          console.log(transaction)
          options.body = `transaction=${JSON.stringify(transaction)}`;
          console.log(options);

          fetch(`${this.props.host}/transaction/submitTx`, options)
          .then((response) => {
            response.json()
            .then((data) => {
              console.log(data)
              this.setState({cart: {}, status: ["cart", "Thank you, order successfully processed."]});
            })
            .catch((err) => {this.setState({status: ["error", "Failed to add transaction."]})});
          })
        } else {
          this.setState({status: ["error", `Failed to add transaction. Recipient's current balance is below the total price of these items.`]});
        }
      })
      .catch((err) => {this.setState({status: ["error", "Failed to get recipient balance."]})});
    })
    .catch(err => console.log(err));
  };

  updateTotalPrice = (cart) => {
    return Object.values(cart).reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  };

  render() {
    return (
      <div>
        <Header merchant={this.props.merchant} logout={this.props.logout} />
          <Container>
            <Row>
              <Col>
                <SearchBar />
                <ProductList products={this.state.products} changeCart={this.changeCart} />
              </Col>
              <Col>
                {this.state.totalPrice > 0 && <Cart cart={this.state.cart} totalPrice={this.state.totalPrice} changePrice={this.changePrice} addTransaction={this.addTransaction} />}
                {(this.state.status && this.state.status[0] === "cart") && <p>{this.state.status[1]}</p>}
                {(this.state.status && this.state.status[0] === "error") && <p>{this.state.status[1]}</p>}
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  };
};

export default Dashboard;