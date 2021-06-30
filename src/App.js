import { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import styles from "./App.module.css";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFoundView";

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>{" "}
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
