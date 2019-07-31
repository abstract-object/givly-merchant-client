import React, {Component} from "react";

class SearchBar extends Component {
  render() {
    return (
      <article id="search">
        <div className="search-container">
          <div className="search-group v2">
          <input className="search-input inactive" type="text" placeholder="Search Item" onKeyDown={this.search}/>
          <button class="button button-brand-primary button-search">Search</button>
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