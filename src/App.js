import React from 'react';
import {getAll} from './BooksAPI'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BookShelf from './views/Home.js';
import SearchPage from './views/Search.js';

class BooksApp extends React.Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      console.log(books)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <body className="app">
      <Switch>
        <Route exact path={"/"} component={BookShelf} />
        <Route exact path={"/search"} component={SearchPage} />
      </Switch>
      </body>
    )
  }
}

// component that creates the books into list items
export default BooksApp
