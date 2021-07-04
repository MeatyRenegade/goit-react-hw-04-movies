import React, { Component } from 'react';

import { getTrendMovies, getMovieById } from '../../service/apiService';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';

import styles from './HomeView.module.css';

class HomeView extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      this.setState({ movies: await getTrendMovies() });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <h1 className={styles.header}>Trending today</h1>
        <MovieList movies={movies} />
        {isLoading && <Loader />}
      </>
    );
  }
}

export default HomeView;
