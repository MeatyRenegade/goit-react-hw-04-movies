import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends PureComponent {
  state = {
    query: '',
  };

  static propTypes = { onSubmit: PropTypes.func };

  handleChange = e => {
    const { value } = e.currentTarget;

    if (value) {
      this.setState({ query: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for a movie....."
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
