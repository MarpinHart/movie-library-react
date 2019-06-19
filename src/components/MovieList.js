import React, { Component } from "react";
import api from "../api";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      filteredMovies: []
    };
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSearch(event){
    event.preventDefault()
    const year = this.state.year;
    api.getFilteredYear(year).then(response => {
      this.setState({
        filteredMovies: response
      });
    });

  }
  render() {
    return (
      <div className="MovieList">
        <input
          type="text"
          name="year"
          value={this.state.year}
          onChange={e => this.handleInputChange(e)}
        />
        <button type="submit" onClick={e => this.handleSearch(e)}> Search </button>
      </div>
    );
  }
}
