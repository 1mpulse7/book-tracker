import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BookShelf from './views/Home.js';
import SearchPage from './views/Search.js';
import {getAll} from './BooksAPI.js'

class BooksApp extends React.Component {
  state = {
    //not used yet
  }

  componentDidMount = () => {
    if(this.state.newBook) {
      this.refreshAllBooks()
    }
  }

  refreshAllBooks = () => {
    getAll()
    .then((list) => {
      this.setState({
        books: (list),
        newBook: false
      });
    });
  }


  render() {
    return (
      <body className="app">
      <Switch>
        <Route exact path={"/"} render={(props) => <BookShelf {...this.state.refreshAllBooks} books={this.state.books} onRefreshAllBooks={this.refreshAllBooks} /> } />
        <Route exact path={"/search"} component={SearchPage} />
      </Switch>
      </body>
    )
  }
}

// component that creates the books into list items
export default BooksApp
