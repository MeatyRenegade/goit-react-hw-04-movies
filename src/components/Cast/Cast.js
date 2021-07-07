import React, { Component } from 'react';
import { getPosterPic, getMovieCastById } from '../../service/apiService';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
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
    const { casts } = this.state;

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
      </section>
    );
  }
}

export default Cast;
