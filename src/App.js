import React, { Component } from "react";
import "./App.css";
import api from "./services/api";
import Header from "./components/Header";
import LyricContainer from "./components/LyricContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyric1: "",
      lyric2: ""
    };
  }

  handleFormSubmit = async (artist, title) => {
    const lyric = await api(artist, title);

    const lyricEN = lyric.text;
    const lyricPT = lyric.translate[0].text;

    this.setState({ lyric1: lyricEN, lyric2: lyricPT });
  };

  render() {
    return (
      <div className="mainContainer">
        <Header submitHandler={this.handleFormSubmit} />
        <LyricContainer lyric1={this.state.lyric1} lyric2={this.state.lyric2} />
      </div>
    );
  }
}

export default App;
