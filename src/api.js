import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY

const service = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,
  getMovies(){
    return service.get(`/search/movie/550?api_key=${apiKey}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  getFilteredYear(year){
    console.log(year)
    return service.get(`/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&primary_release_year=${year}`)
      .then(res => {
        console.log(res.data.results)
        return res.data
      })
      .catch(errHandler)
  }
}