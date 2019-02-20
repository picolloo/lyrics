import React, { Component } from "react";

export default class LyricCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        readOnly
        className={this.props.value}
        value={this.props.lyric}
      />
    );
  }
}
