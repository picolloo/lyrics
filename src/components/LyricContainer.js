import React, { Component } from "react";
import LyricCard from "./LyricCard";
import "./LyricContainer.css";

export default class LyricContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyric: ""
    };
  }

  render() {
    return (
      <div className="lyricContainer">
        <LyricCard role="card1" lyric={this.state.lyric} />
        <LyricCard role="card2" lyric={this.state.lyric} />
      </div>
    );
  }
}
