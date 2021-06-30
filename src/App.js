import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import styles from "./App.module.css";
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

const API_KEY = 'dc54b28984a60b0de8f79c9322eebf59';
const Example_API_Request =
  'https://api.themoviedb.org/3/movie/550?api_key=dc54b28984a60b0de8f79c9322eebf59';
const READ_ACC_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzU0YjI4OTg0YTYwYjBkZThmNzljOTMyMmVlYmY1OSIsInN1YiI6IjYwZGNmZDBkOTk3OWQyMDAyOTQzNmJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZolqivUSBHzbWdsqpPOVtBSN2X05rqq4rm1n9fSMtE';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>{' '}
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>{' '}
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>{' '}
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/authors" component={AuthorsView} />
          <Route path="/books" component={BooksView} />
          <Route component={NotFoundView} />
        </Switch>
      </>
    );
  }
}

export default App;
