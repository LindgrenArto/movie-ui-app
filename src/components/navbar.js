import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <img src={require("../img/movie-ui.png")} alt="logo" />
          <span>Movie Database</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
