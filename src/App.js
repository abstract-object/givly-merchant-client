import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Login from './Components/Auth/Login.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      merchant: {}
    };
  };

  componentDidMount() {
    if (localStorage.merchant_id) {

    }
  };

  render() {
    return (
      <div className="Givly Merchant Portal">
        {localStorage.merchant_id ? <Dashboard /> : <Login />}
      </div>
    );
  };
};

export default App;
