import React from 'react';
import MovieDescription from '../movieDescription/MovieDescription.js';
import { Route } from 'react-router-dom';
import './App.css';
import MoviesPage from '../moviesPage/MoviesPage.js';

const App = () => {
  
  return (
    <main className="App">
        <h1 className='App-header'>Rancido Tomatillos</h1>
        {/* <Search movies={movies} addMovie={setSelectedMovie} filterMovies={setMovies} assignURL={this.assignURL} /> */}
          <Route exact path='/' render={() => <MoviesPage />} />
          <Route exact path='/movie/:id' render={({ match }) => { return <MovieDescription movieId={match.params.id} /> }} />
      </main>
  )
}

export default App;