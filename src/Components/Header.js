import React, { Component } from 'react';
const logo = '/givlytransparent.png';

class Header extends Component {
  render() {
    return (
      <nav id="nav">
        <img src={logo} width="113" height="42" className="givlyLogo" alt="givly" />
        <span>{this.props.merchant.storeName} Dashboard</span> 
        <span> Analytics </span>
        <a href="#"><span onClick={this.props.logout}>Log out</span></a>
      </nav>
    );
  };
};

export default Header;