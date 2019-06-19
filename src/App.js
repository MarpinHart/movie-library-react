import React from 'react';
import './App.css';

import MovieList from './components/MovieList'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
