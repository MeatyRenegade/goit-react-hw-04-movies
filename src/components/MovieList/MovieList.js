import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPosterPic } from '../../service/apiService';
import routes from '../../routes';

import styles from './MovieList.module.css';

class MovieList extends Component {
  state = {};

  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
      }),
    ),
  };

  render() {
    const { movies, location } = this.props;

    return (
      <section className={styles.section}>
        <ul className={styles.list}>
          {movies.map(movie => (
            <li className={styles.item} key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img src={getPosterPic(movie.poster_path)} alt={movie.title} />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default withRouter(MovieList);
