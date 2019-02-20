import React, { Component } from "react";
import "./LyricCard.css";

export default class LyricCard extends Component {
  render() {
    return (
      <textarea
        readOnly
        onScroll={this.props.syncScroll}
        className={this.props.value}
        value={this.props.lyric}
        placeholder="Remember, be nice!"
        style={{ scrollTop: this.props.scrollTop }}
      />
    );
  }
}
