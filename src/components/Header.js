import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ["akon"],
      title: ["lonely"]
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.submitHandler(this.state.artist, this.state.title);
  };

  handleArtistChange = e => {
    this.setState({
      artist: e.target.value.split(" ")
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value.split(" ")
    });
  };

  render() {
    return (
      <form className="headerForm header" onSubmit={this.handleSubmit}>
        <input
          className="artistInput"
          onChange={this.handleArtistChange}
          value={this.state.artist}
          placeholder="Artist"
        />

        <input
          className="titleInput"
          onChange={this.handleTitleChange}
          value={this.state.title}
          placeholder="Title"
        />

        <button type="submit">Search</button>
      </form>
    );
  }
}
