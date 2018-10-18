import React, {Component} from 'react';
import Shelf from '../components/shelf.js';
import ActionButton from '../components/ActionButton.js';



// component for the actual BookShelf

class BookShelf extends React.Component {
  state = {}

  componentDidMount = () => {
    this.props.onRefreshAllBooks();
  }

  updateShelves = () => {
    const currentlyReading = {
      title: 'Currently Reading',
      books: this.props.books.filter((book) => book.shelf === 'currentlyReading')
    };
    const wantToRead = {
      title: 'Want To Read',
      books: this.props.books.filter((book) => book.shelf === 'wantToRead')
    };
    const booksRead = {
      title: 'Already Read',
      books: this.props.books.filter((book) => book.shelf === 'read')
    };

    return([currentlyReading, wantToRead, booksRead]);
  }

  render() {
    let shelves = [];

    if (this.props.books && this.props.books.length) {
      shelves = this.updateShelves();
    }

    return (
      <div>
        <div className="list-books-title"><h1>My Book Tracker</h1></div>
        <section className="list-books-content">
          <div>
            {shelves && shelves.map((shelf) => (<Shelf
              key={shelf.title}
              shelf={shelf}
            />))}
          </div>
        </section>
        <ActionButton/>
      </div>
    )
  }
}

export default BookShelf
