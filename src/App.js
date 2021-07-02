import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundView from './views/NotFoundView';
import Loader from './components/Loader';
import Navigation from './components/Navigation';

import styles from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView'),
);

class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className={styles.App}>
        <Navigation />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/movies" component={MoviesView} />
            <Route path="/movies/:movieId" component={MovieDetailsView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>

        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
