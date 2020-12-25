import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:filmId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
