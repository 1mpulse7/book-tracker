import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js'
import BookCreator from '../components/book.js'

class SearchPage extends React.Component {
  state = {
    query: "",
    books: [],
  }

  queryTimer = null;

  queryDebounce = (value) => {
    clearTimeout(this.queryTimer);
    this.setState({query: value});
    this.queryTimer = setTimeout(this.updateSearch, 250);

  }

  updateSearch = () => {
    let newBookList = [];

    if (this.state.query === "") {
      this.setState({books: []})
      return;
    }

     BooksAPI.search(this.state.query)
     .then(response => {
       newBookList = response;
       this.setState({books: newBookList})
     })
  }

  componentWillReceiveProps(props) {
    this.props = props;
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.queryDebounce(event.target.value)}
              value={this.state.query.value}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books && this.state.books.map((book) => (
              <li key={book.id}>
                <BookCreator book={book} onChangeShelves={this.props.onChangeShelves} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
