import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
      <header>
        <div className="logo"><h1>twoja<font color="#ede21b">POGODA</font></h1></div>
        <div className="addCity">
          <input
             className="inputCity"
             placeholder="Szukaj miasta..."></input>
          <button>
            +
          </button>
        </div>
      </header>
  );
  }
}

export default SearchBar;
