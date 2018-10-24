import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BookShelf from './views/Home.js';
import SearchPage from './views/Search.js';
import * as BooksAPI from './BooksAPI.js'

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
    BooksAPI.getAll()
    .then((list) => {
      this.setState({
        books: (list),
        newBook: false
      });
    });
  }

  changeShelves = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      let newBookList = this.state.books.slice(0);

      const books = newBookList.filter((listBook) => listBook.id === book.id);

      if(books.length) {
        books[0].shelf = shelf;
      } else {
        newBookList.push(book);
      }

      this.setState({books: newBookList});
    })
  }


  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path={"/"} render={(props) => <BookShelf
          {...this.state.refreshAllBooks} books={this.state.books}
          onRefreshAllBooks={this.refreshAllBooks}
          onChangeShelves={this.changeShelves} /> } />
        <Route exact path={"/search"} render={(props) => <SearchPage
          {...this.state.refreshAllBooks} books={this.state.books}
          onRefreshAllBooks={this.refreshAllBooks}
          onChangeShelves={this.changeShelves} /> } />
      </Switch>
      </div>
    )
  }
}

// component that creates the books into list items
export default BooksApp
