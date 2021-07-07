import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './MovieAdditionalInfo.module.css';

class MovieAdditionalInfo extends Component {
  state = {};

  render() {
    const { url, location } = this.props;

    return (
      <div className={styles.container}>
        <h3>Additional Information</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
              to={{
                pathname: `${url}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MovieAdditionalInfo);
