import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null
    };
  };

  handleSubmit = event => {
    event.preventDefault();

    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `storeName=${this.props.merchant.storeName}&storeEmail=${this.props.merchant.storeEmail}`,
      mode:'cors'
    }

    fetch(`${this.props.host}/merchant/login`, options)
      .then((response) => {
        response.json()
        .then((data) => {
          this.setState({error: null});
          this.props.login(data);
        })
        .catch((err) => {this.setState({error: err})});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="signInForm">
        {this.state.error && <p className="error">Incorrect email or store name</p>}
        <form className="signIn">
          <div>
            <input className="storeEmail" name="storeEmail" placeholder="Email" type="email" value={this.props.merchant.storeEmail || ""} onChange={this.props.handleChange} />
          </div>
          <div>
            <input className="storeName" name="storeName" placeholder="Store name" value={this.props.merchant.storeName || ""} onChange={this.props.handleChange} />
          </div>
          <br />
          <div>
            <input type="submit" onClick={this.handleSubmit} className="signInButton" value="Log In" />
          </div>
        </form>
        <br />
      </div>
    );
  }
};

export default Login;
