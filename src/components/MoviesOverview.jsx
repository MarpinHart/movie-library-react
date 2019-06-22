import React, { Component } from "react";
import api from "../api";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import RangeSlider from "./RangeSlider";
import PageNavigation from "./PageNavigation";
import MovieList from "./MovieList";

class MoviesOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [1990, 2019],
      ratings: [0, 10],
      runtimes: [0, 300],
      totalPages: 0,
      page: 1,
      checkSearch: false,
      filteredMovies: []
    };
  }

  handlePageChange(event) {
    event.preventDefault();
    if (event.currentTarget.id === "next")
      this.setState(
        prevState => ({ page: prevState.page + 1 }),
        () => this.handleSearch(event)
      );
    if (event.currentTarget.id === "previous" && this.state.page > 1)
      this.setState(
        prevState => ({ page: prevState.page - 1 }),
        () => this.handleSearch(event)
      );
  }
  handleSearch(event) {
    if (event) event.preventDefault();
    const { years, ratings, runtimes, page } = this.state;
    const [startingYear, endingYear] = years;
    const [minRating, maxRating] = ratings;
    const [minRuntime, maxRuntime] = runtimes;
    api
      .getFilteredMovies(
        startingYear,
        endingYear,
        minRating,
        maxRating,
        minRuntime,
        maxRuntime,
        page
      )
      .then(response => {
        this.setState({
          filteredMovies: response.results,
          totalPages: response.total_pages,
          checkSearch: true
        });
      });
  }
  handleSliderChange = name => (event, value) => {
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="MoviesOverview">
        <div className="sliders">
          <RangeSlider
            name="years"
            min={1990}
            max={2019}
            value={this.state.years}
            handleSliderChange={(e, val) => this.handleSliderChange(e, val)}
          />
          <RangeSlider
            name="ratings"
            min={0}
            max={10}
            value={this.state.ratings}
            handleSliderChange={(e, val) => this.handleSliderChange(e, val)}
          />
          <RangeSlider
            name="runtimes"
            min={0}
            max={300}
            value={this.state.runtimes}
            handleSliderChange={(e, val) => this.handleSliderChange(e, val)}
          />
          <div className="submit-button">
          <Button
            variant="contained"
            color="primary"
            onClick={e => this.handleSearch(e)}
          >
            Search
          </Button>
          </div>
        </div>
        {this.state.checkSearch && (
          <PageNavigation
            page={this.state.page}
            totalPages={this.state.totalPages}
            handleSearch={e => this.handlePageChange(e)}
          />
        )}
        <div className="MovieList">
          {this.state.filteredMovies.length === 0 && this.state.checkSearch ? (
            <CircularProgress />
          ) : (
            this.state.filteredMovies.map(movie => <MovieList key={movie.id} movie={movie} />)
          )}
        </div>
      </div>
    );
  }
}

export default MoviesOverview;
