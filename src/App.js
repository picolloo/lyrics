import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import LyricContainer from "./components/LyricContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <LyricContainer />
      </div>
    );
  }
}

export default App;
