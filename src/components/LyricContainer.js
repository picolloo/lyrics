import React, { Component } from "react";
import LyricCard from "./LyricCard";
import "./LyricContainer.css";

export default class LyricContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lyricContainer">
        <LyricCard value="card1" lyric={this.props.lyric1} />
        <LyricCard value="card2" lyric={this.props.lyric2} />
      </div>
    );
  }
}
