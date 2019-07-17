import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: {}, products:
      {
        1: {
          id: 1,
          image: "http://harboarts.com/shirtdesigner/jpg_design_exports/loaf-of-bread-vector-graphics_template_1434971128379T0A.jpg",
          name: "Generic bread"
        }
      }
    };
  };

  render() {
    return (
      <div className="App">
        <Dashboard products={this.state.products} cart={this.state.cart} changeCart={this.changeCart} />
      </div>
    );
  };

  changeCart = (product, add) => {
    this.setState(prevState => {
      const cart = Object.assign({}, prevState.cart);
      let amount = -1;
      
      if (add) {
        amount = 1;
      }

      cart[product.id] = product;

      if (cart[product.id].quantity) {
        cart[product.id].quantity += amount;
      } else if (add) {
        cart[product.id].quantity = 1;
      }

      if (!cart[product.id].quantity || cart[product.id].quantity <= 0) delete cart[product.id];
      return { cart };
    });
  };
};

export default App;
