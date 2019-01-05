import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MovieList from "./components/MovieList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <MovieList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
