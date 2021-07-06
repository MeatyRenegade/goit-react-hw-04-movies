import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { getMovieById } from '../../service/apiService';
import MovieCard from '../../components/MovieCard';
import MovieAdditionalInfo from '../../components/MovieAdditionalInfo';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Loader from '../../components/Loader';

import styles from './MovieDetailsView.module.css';

class MovieDetailsView extends Component {
  state = {
    movies: {},
    isLoading: false,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    try {
      this.setState({ isLoading: true });
      this.setState({ movies: await getMovieById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  backToHomePage = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const {
      movies: {
        poster_path: poster,
        title,
        popularity,
        overview,
        genres,
        release_date,
      },
      isLoading,
    } = this.state;

    const movieId = this.props.match.params.movieId;
    const url = this.props.match.url;

    return (
      <>
        <div className={styles.container}>
          <button
            className={styles.button}
            type="button"
            onClick={this.backToHomePage}
          >
            &#8592; Go back
          </button>
        </div>

        <MovieCard
          poster={poster}
          title={title}
          popularity={popularity}
          overview={overview}
          genres={genres}
          date={release_date}
        />

        <MovieAdditionalInfo url={url} />

        <Switch>
          <Route
            exact
            path={`${url}/cast`}
            render={() => <Cast movieId={movieId} />}
          />
          <Route
            exact
            path={`${url}/reviews`}
            render={() => <Reviews movieId={movieId} />}
          />
        </Switch>

        {isLoading && <Loader />}
      </>
    );
  }
}

export default MovieDetailsView;
