import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <article id="search">
        <input className="searchBar" placeholder="Search" onKeyDown={this.search} />
      </article>
    );
  };

  search = event => {
    
  };
};

export default SearchBar;