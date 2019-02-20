import React, { Component } from "react";

import api from "../services/api";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "akon",
      title: "lonely"
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    // const lyric = await api(this.state.artist, this.state.title.split(" "));

    // this.setState({ lyric: lyric });
  };

  handleArtistChange = e => {
    this.setState({
      artist: e.target.value
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
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
