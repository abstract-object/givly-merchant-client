import React, { Component } from 'react';
const logo = '/givlytransparent.png';

class Header extends Component {
  render() {
    return (
      <nav id="nav">
        <img src={logo} width="113" height="42" className="givlyLogo" alt="givly" />
        <span>Storename Dashboard</span>
        <span>Cart</span>
        <span>Log out</span>
      </nav>
    );
  };
};

export default Header;