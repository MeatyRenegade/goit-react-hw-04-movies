import React, { Component } from 'react';
import { getMovieReviewsById } from '../../service/apiService';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
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
    const { reviews } = this.state;

    return reviews.length > 0 ? (
      <section className={styles.section}>
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={styles.item} key={id}>
                <h4 className={styles.author}>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </section>
    ) : (
      <section className={styles.section}>
        <p className={styles.text}>We don't have reviews for this movie.</p>
      </section>
    );
  }
}

export default Reviews;
