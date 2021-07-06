import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MovieAdditionalInfo.module.css';

class MovieAdditionalInfo extends Component {
  state = {};

  render() {
    const { url } = this.props;

    return (
      <div className={styles.container}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MovieAdditionalInfo;
