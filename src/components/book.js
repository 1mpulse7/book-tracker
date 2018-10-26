import React from 'react';
import ShelfActionButton from './shelfActionButton.js'

class BookCreator extends React.Component {
  state = {
    shelfSelection: this.props.book.shelf || 'none'
  }

  render() {
    // putting authors inside of this variable with the .join allows for multiple authors without throwing an error
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');

    let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return (
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: url }}></div>
          <ShelfActionButton book={this.props.book} onChangeShelves={this.props.onChangeShelves}/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
    )
  }
}

export default BookCreator
