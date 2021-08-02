import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import routes from './routes';

import styles from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView'),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <div className={styles.Container}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={routes.home} component={HomeView} />
              <Route exact path={routes.movies} component={MoviesView} />
              <Route path={routes.movieDetails} component={MovieDetailsView} />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default App;
