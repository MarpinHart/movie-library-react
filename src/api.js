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

  getFilteredMovies(startingYear, endingYear){
    console.log(startingYear, endingYear, "start-end")
    return service.get(`/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_date.gte=${startingYear}&primary_release_date.lte=${endingYear}`)
      .then(res => {
        console.log(res.data.results)
        return res.data
      })
      .catch(errHandler)
  },

  getWeeklyTrending(){
    return service.get(`/trending/all/week?api_key=${apiKey}`)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(errHandler)
    }
}