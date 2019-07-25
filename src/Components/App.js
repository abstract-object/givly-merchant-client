import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import "../App.css";
import Dashboard from "./Dashboard/Dashboard.js";
import Login from "./Auth/Login.js";
import AnalyticsPage from './Analytics/AnalyticsPage';

const HOST = "http://35.203.20.184";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      merchant: {
        id: (localStorage.merchant_id ? localStorage.merchant_id : null),
        cryptoId: (localStorage.merchant_crypto_id ? localStorage.merchant_crypto_id : null),
        storeEmail: (localStorage.merchant_email ? localStorage.merchant_email : null),
        storeName: (localStorage.merchant_store_name ? localStorage.merchant_store_name : null),
      }
    };
  };

  handleChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState(prevState => {
      const merchant = Object.assign({}, prevState.merchant);
      merchant[name] = value;
      
      return {merchant};
    });
  };

  login = data => {
    localStorage.setItem('merchant_id', data.merchantUuid);
    localStorage.setItem('merchant_crypto_id', data.merchantCryptoId);
    localStorage.setItem('merchant_email', data.storeEmail);
    localStorage.setItem('merchant_store_name', data.storeName);

    this.setState(prevState => {
      const merchant = Object.assign({}, prevState.merchant);
      merchant.id = data.merchantUuid;
      merchant.cryptoId = data.merchantCryptoId;
      merchant.storeEmail = data.storeEmail;
      merchant.storeName = data.storeName;
      return {merchant};
    });
  };

  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.setState({
      merchant: {
        id: null,
        cryptoId: null,
        storeEmail: null,
        storeName: null,
      }
    });
  };

  render() {
    return (
      <div className="Givly Merchant Portal">
        {(localStorage.merchant_id && this.state.merchant.id) ? 
        <Switch>
          <Route exact path='/' 
          render={(props) => <Dashboard {...props} merchant={this.state.merchant} logout={this.logout} host={HOST}/>}
          />
          <Route path='/analytics' 
          render={(props) => <AnalyticsPage {...props} merchant={this.state.merchant} host={HOST}/>}
          />
        </Switch>
        :
        <Login merchant={this.state.merchant} handleChange={this.handleChange} login={this.login} host={HOST}/>}
      </div>
    );
  };
};

export default App;
