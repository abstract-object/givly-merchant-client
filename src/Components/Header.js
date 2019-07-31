import React, {Component} from "react";
import {Link} from "react-router-dom";
const logo = "/givlytransparent.png";

class Header extends Component {
  render() {
    return (
      <header className="nav">
      <nav>
        <span><img className="logo" src={logo} alt="Givly"/></span>
        <span id="navlinks">
          <Link to="/">{this.props.merchant.storeName} Dashboard</Link>
          <Link to="/analytics">Analytics</Link>
          <button onClick={this.props.logout}>Log out</button>
        </span>
      </nav>
      </header>
    );
  };
};

export default Header;