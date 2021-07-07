import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieById } from '../../service/apiService';
import MovieCard from '../../components/MovieCard';
import MovieAdditionalInfo from '../../components/MovieAdditionalInfo';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Loader from '../../components/Loader';
import routes from '../../routes';

import styles from './MovieDetailsView.module.css';

class MovieDetailsView extends Component {
  state = {
    movies: {},
    isLoading: false,
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
    }),
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

  handleGoBack = () => {
    const { state } = this.props.location;
    const { search } = this.props.location;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: `${routes.movies}`,
      search: `query=${search}`,
    });
  };

  render() {
    const {
      movies: {
        poster_path: poster,
        title,
        vote_average,
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
            onClick={this.handleGoBack}
          >
            &#8592; Go back
          </button>
        </div>

        <MovieCard
          poster={poster}
          title={title}
          vote_average={vote_average}
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
