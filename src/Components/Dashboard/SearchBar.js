import React, {Component} from "react";

class SearchBar extends Component {
  render() {
    return (
      <article id="search">
        <input className="searchBar" placeholder="Search Item" onKeyDown={this.search}/>
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