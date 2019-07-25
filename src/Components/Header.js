import React, {Component} from "react";
import {Link} from "react-router-dom";
const logo = "/givlytransparent.png";

class Header extends Component {
  render() {
    return (
      <nav id="nav">
        <img src={logo} width="113" height="42" className="givlyLogo" alt="givly"/>
        <span><Link to="/">{this.props.merchant.storeName} Dashboard</Link></span> 
        <span><Link to="/analytics">Analytics</Link></span> 
        <a href="#"><span onClick={this.props.logout}>Log out</span></a>
      </nav>
    );
  };
};

export default Header;