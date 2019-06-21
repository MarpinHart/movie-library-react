import React from 'react';
import './App.css';

import MoviesOverview from './components/MoviesOverview'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <NavBar />
      <MoviesOverview />
    </div>
  );
}

export default App;
