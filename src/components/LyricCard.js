import React, { Component } from "react";

export default class LyricCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <textarea className={this.props.role} value={this.props.lyric} />;
  }
}
