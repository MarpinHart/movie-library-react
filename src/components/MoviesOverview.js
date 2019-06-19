import React, { Component } from "react";
import api from "../api";

export default class MoviesOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endingYear: "",
      startingYear: "",
      filteredMovies: [],
      trendingMovies: []
    };
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSearch(event){
    event.preventDefault()
    const { endingYear, startingYear } = this.state;
    api.getFilteredMovies(startingYear, endingYear).then(response => {
      this.setState({
        filteredMovies: response
      });
    });

  }
  render() {
    return (
      <div className="MoviesOverview">
        <input
          type="text"
          name="startingYear"
          value={this.state.startingYear}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          name="endingYear"
          value={this.state.endingYear}
          onChange={e => this.handleInputChange(e)}
        />
        <button type="submit" onClick={e => this.handleSearch(e)}> Search </button>
      </div>
    );
  }
  componentDidMount(){
    api.getWeeklyTrending()
      .then(res => {
        console.log(res)
        this.setState({
          trendingMovies: res
        })
      })
  }
}
