import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [
      {
        id: 1,
        image: "http://harboarts.com/shirtdesigner/jpg_design_exports/loaf-of-bread-vector-graphics_template_1434971128379T0A.jpg",
        name: "Generic bread",
        description: "Filling but tasteless",
        price: 2,
        quantity: 100
      }
    ] };
  };

  render() {
    return (
      <div className="App">
        <Dashboard products={this.state.products} />
      </div>
    );
  }
}

export default App;
