import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieList.module.css';

class MovieList extends Component {
  state = {};
  render() {
    const { movies } = this.props;

    return (
      <section className={styles.section}>
        <ul className={styles.list}>
          {movies.map(movie => (
            <li className={styles.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MovieList;
