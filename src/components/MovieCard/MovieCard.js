import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPosterPic } from '../../service/apiService';

import styles from './MovieCard.module.css';

class MovieCard extends Component {
  static defaultProps = {
    overview: '(empty)',
    poster: null,
    popularity: 0,
    genres: [],
  };

  static propTypes = {
    poster: PropTypes.string || PropTypes.oneOf([null]),
    title: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
    date: PropTypes.string,
  };

  render() {
    const { poster, title, popularity, overview, genres, date } = this.props;
    const getDate = new Date(date);
    const getFullYear = getDate.getFullYear();

    return (
      <article className={styles.article}>
        <img src={getPosterPic(poster)} alt={title} />
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className={styles.header}>
              {title}({getFullYear})
            </h1>
            <p className={styles.text}>User Score: {popularity.toFixed()}%</p>
          </section>
          <section className={styles.section}>
            <h2>Overview</h2>
            <p className={styles.text}>{overview}</p>
          </section>
          <section className={styles.section}>
            <h3>Genres</h3>
            <p className={styles.text}>
              {genres.map(({ name }) => name).join(', ')}
            </p>
          </section>
        </div>
      </article>
    );
  }
}

export default MovieCard;
