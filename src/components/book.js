import React, {Component} from 'react';

class BookCreator extends React.Component {
  changeShelf = (event) => {
    console.log(event.target.value )
  }
  render() {
    return (
      <ol className="books-grid">
      {
        this.props.booksToCreate.map(book => (
        <li key={book.title}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book.coverImage }}></div>
              <div className="book-shelf-changer">
                <select onChange={this.changeShelf}>
                  <option value={"move"} disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
      ))
      }
      </ol>

    )
  }
}

export default BookCreator
