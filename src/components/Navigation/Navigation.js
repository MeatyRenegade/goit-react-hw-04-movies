import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.List}>
          <li>
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
