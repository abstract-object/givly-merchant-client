import React, { Component } from 'react';

const HOST = "http://35.230.1.69";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeEmail: "",
      storeName: "",
    };
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `storeName=${this.state.storeName}&storeEmail=${this.state.storeEmail}`,
      mode:'cors'
    }

    fetch(`${HOST}/merchant/login`, options)
      .then((response) => {
        response.json()
        .then((data) => {console.log(data)})
        .catch((err) => {console.log(err)})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="signInForm">
        <form className="signIn">
          <div>
            <input className="storeEmail" name="storeEmail" placeholder="Email" type="email" value={this.state.storeEmail} onChange={this.handleChange} />
          </div>
          <div>
            <input className="storeName" name="storeName" placeholder="Store name" value={this.state.storeName} onChange={this.handleChange} />
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