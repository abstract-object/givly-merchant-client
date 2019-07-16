import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section className="search">
        <input className="searchBar" placeholder="Search" onKeyDown={this.search} />
      </section>
    );
  };

  search = event => {
    
  };
};

export default SearchBar;