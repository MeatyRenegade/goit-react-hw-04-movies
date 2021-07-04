import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MovieAdditionalInfo.module.css';

class MovieAdditionalInfo extends Component {
  state = {};

  render() {
    // const { url } = this.props.match;

    return (
      <div className={styles.container}>
        <h3>Additional Information</h3>
        <ul>
          <li>{/* <NavLink></NavLink> */}Cast</li>
          <li>{/* <NavLink></NavLink> */}Reviews</li>
        </ul>
      </div>
    );
  }
}

export default MovieAdditionalInfo;
