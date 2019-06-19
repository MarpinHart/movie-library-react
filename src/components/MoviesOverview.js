import React, { Component } from "react";
import api from "../api";
import RangeSlider from './RangeSlider'

export default class MoviesOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [1990,2017],
      minRating: "",
      maxRating: "",
      minRuntime: "",
      maxRuntime: "",
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
    const { years } = this.state;
    const [ startingYear, endingYear ] = years
    api.getFilteredMovies(startingYear, endingYear).then(response => {
      this.setState({
        filteredMovies: response
      });
    });
  }
  handleSliderChange = name => (event, value) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="MoviesOverview">
        <RangeSlider
          name="years"
          min={1990}
          max={2017}
          value={this.state.years}
          handleSliderChange={(e, val)=>this.handleSliderChange(e, val)}
          />

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
