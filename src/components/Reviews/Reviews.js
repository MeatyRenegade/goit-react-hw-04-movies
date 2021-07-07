import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviewsById } from '../../service/apiService';
import Loader from '../Loader';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  static propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    try {
      this.setState({ isLoading: true });
      this.setState({ reviews: await getMovieReviewsById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { reviews, isLoading } = this.state;

    return (
      <section className={styles.section}>
        <ul className={styles.list}>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <li className={styles.item} key={id}>
                  <h4 className={styles.author}>Author: {author}</h4>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <li className={styles.section}>
              <p className={styles.text}>
                We don't have reviews for this movie.
              </p>
            </li>
          )}
        </ul>
        {isLoading && <Loader />}
      </section>
    );
  }
}

export default Reviews;
