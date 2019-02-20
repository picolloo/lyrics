import React, { Component } from "react";
import LyricCard from "./LyricCard";
import "./LyricContainer.css";

export default class LyricContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0
    };
  }

  syncScrolls = e => {};

  render() {
    return (
      <div className="lyricContainer">
        <LyricCard
          value="card1"
          scroll={this.state.scroll}
          lyric={this.props.lyric1}
          syncScroll={this.syncScrolls}
        />
        <LyricCard
          value="card2"
          lyric={this.props.lyric2}
          scroll={this.state.scroll}
          syncScroll={this.syncScrolls}
        />
      </div>
    );
  }
}
