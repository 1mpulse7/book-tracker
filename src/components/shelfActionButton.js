import React, { Component } from 'react';

class ShelfActionButton extends React.Component {
  state = {
    shelfSelection: this.props.book.shelf || 'none'
  }

  onChangeShelves = (book, shelf) => {
    this.setState({shelfSelection: shelf});
    this.props.onChangeShelves(book, shelf)
  }

  componentWillReceiveProps = (props) => {
    this.props = props;
    this.setState({shelfSelection: this.props.book.shelf});
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select
          value={this.state.shelfSelection}
          onChange={(event) => this.onChangeShelves(this.props.book, event.target.value)}>
          <option value="" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfActionButton
