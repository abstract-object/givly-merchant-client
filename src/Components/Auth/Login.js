import React, { Component } from 'react';

const HOST = "http://35.230.1.69";

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

    fetch(`${HOST}/merchant/login`, options)
      .then((response) => {
        response.json()
        .then((data) => {
          this.setState({error: null});
          this.props.login(data.merchantUuid);
        })
        .catch((err) => {this.setState({error: err})});
      })
      .catch(err => console.log(err));
  };

//   handleSubmit = event => {
//     event.preventDefault();
//     return fetch(`${HOST}/merchant/create`, {
//       method: 'POST',
//       body: JSON.stringify({
//         storeEmail: this.state.storeEmail,
//         storeName: this.state.storeName
//       }),
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       mode: 'cors'
//     }).then(response => console.log(response))
//       .then(data => {
//         console.log(data);
//         /* localStorage.setItem('merchant_id', data.auth_token);
//         if (!localStorage.id_token || localStorage.id_token === "undefined") {
//           this.props.loginError(data.errors)
//           this.setState({error: Object.entries(data)})
//           console.log(data)
//         } else {
//           console.log(data)
//           localStorage.setItem('gravatar', data.user.gravatar);
//           this.props.receiveLogin(data);
//           let url = `http://localhost:3001/users/${parseJwt(localStorage.id_token).user_id}/task_lists`
//           this.props.fetchTaskLists(url);
//           !!this.props.history ? this.props.history.push('/') : history.push('/');
//         } */
//     });
//   };

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
