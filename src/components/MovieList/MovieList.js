import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getPosterPic } from '../../service/apiService';

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
              <Link to={`/movies/${movie.id}`}>
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

export default MovieList;
