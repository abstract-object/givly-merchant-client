import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <article id="search">
        <div className="search-container">
          <div className="search-group v2">
            <input className="search-input inactive searchBar" type="text" placeholder="I'm looking for..." onKeyDown={this.search}/>
            <button className="button button-brand-primary button-search">Search</button>
          </div>
        </div>
      </article>
    );
  };

  search = event => {
    let searchTerm = event.target.value;

    if (event.key === "Enter") {
      if (searchTerm) {
        this.props.search(searchTerm);
      } else {
        this.props.search(null);
      }
    }
  };
};

export default SearchBar;