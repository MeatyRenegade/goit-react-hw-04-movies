import React, { PureComponent } from 'react';
import queryString from 'query-string';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';
import { searchMovies } from '../../service/apiService';

class MoviesView extends PureComponent {
  state = {
    movies: [],
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search).query;

    if (queryParams) {
      this.setState({ searchQuery: queryParams });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    const { searchQuery } = this.state;

    try {
      this.setState({ isLoading: true });
      const movies = await searchMovies(searchQuery);
      this.setState({ movies: movies });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onChangeQuery = query => {
    if (query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });

      this.setState({ searchQuery: query });
    }
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={movies} />
        {isLoading && <Loader />}
      </>
    );
  }
}

export default MoviesView;
