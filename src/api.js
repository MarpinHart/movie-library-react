import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const service = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,
  getMovies() {
    return service
      .get(`/search/movie/550?api_key=${apiKey}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  getFilteredMovies(startingYear, endingYear, minRating, maxRating, minRuntime, maxRuntime, page) {
    return service
      .get(
        `/discover/movie?api_key=${apiKey}&page=${page}&primary_release_date.gte=${startingYear}&primary_release_date.lte=${endingYear}&vote_average.gte=${minRating}&vote_average.lte=${maxRating}&with_runtime.gte=${minRuntime}&with_runtime.lte=${maxRuntime}`
      )
      .then(res => {
        return res.data;
      })
      .catch(errHandler);
  },
};

