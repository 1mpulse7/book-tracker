import React, {Component} from 'react';
import BookCreator from './book.js'

class Shelf extends React.Component {
  render() {
    return (
      <section className="bookshelf">
        <h3 className="bookshelf-title">{this.props.shelf.title}</h3>
        <ol className="books-grid">
        {this.props.shelf.books.map((book) => (
          <li key={book.id}>
            <BookCreator book={book} onChangeShelves={this.props.onChangeShelves} />
          </li>
        ))}
        </ol>
      </section>
    )
  }
}

export default Shelf
