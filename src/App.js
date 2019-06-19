import React from 'react';
import './App.css';

import MoviesOverview from './components/MoviesOverview'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoviesOverview />
    </div>
  );
}

export default App;
