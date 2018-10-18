import React, {Component} from 'react';

class BookCreator extends React.Component {
  state = {
    shelfSelection: this.props.book.shelf || 'none'
  }

  render() {
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');

    let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return (
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: url }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value={"move"} disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
    )
  }
}

export default BookCreator
