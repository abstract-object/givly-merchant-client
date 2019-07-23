import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Login from './Components/Auth/Login.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      merchant: {
        id: null,
        storeEmail: null,
        storeName: null,
      }
    };
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => {
      const merchant = Object.assign({}, prevState.merchant);
      merchant[name] = value;
      
      return { merchant };
    });
  };

  login = (id) => {
    localStorage.setItem('merchant_id', id);
    this.setState(prevState => {
      const merchant = Object.assign({}, prevState.merchant);
      merchant.id = id;
      
      return { merchant };
    });
  };

  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.setState({
      merchant: {
        id: null,
        storeEmail: null,
        storeName: null,
      }
    });
  };

  render() {
    return (
      <div className="Givly Merchant Portal">
        {(localStorage.merchant_id && this.state.merchant.id) ? <Dashboard merchant={this.state.merchant} logout={this.logout} /> : <Login merchant={this.state.merchant} handleChange={this.handleChange} login={this.login} />}
      </div>
    );
  };
};

export default App;
