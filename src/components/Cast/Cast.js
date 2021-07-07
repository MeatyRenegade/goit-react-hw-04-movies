import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPosterPic, getMovieCastById } from '../../service/apiService';
import Loader from '../Loader';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
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
      this.setState({ casts: await getMovieCastById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { casts, isLoading } = this.state;

    return (
      <section className={styles.section}>
        <ul className={styles.list}>
          {casts.map(({ credit_id, name, character, profile_path }) => {
            return (
              <li className={styles.item} key={credit_id}>
                <img
                  className={styles.profile_picture}
                  src={getPosterPic(profile_path)}
                  alt={name}
                />
                <h5>{name}</h5>
                <h5>Character: {character}</h5>
              </li>
            );
          })}
        </ul>
        {isLoading && <Loader />}
      </section>
    );
  }
}

export default Cast;
