import React, {Component} from 'react';
import Shelf from '../components/shelf.js';
import ActionButton from '../components/ActionButton.js';


// component for the actual BookShelf

class BookShelf extends React.Component {
  render() {
    return (
      <div>
        <div className="list-books-title"><h1>My Book Tracker</h1></div>
        <section className="bookshelf">
          <Shelf title="Currently Reading"/>
          <Shelf title="Want To Read"/>
          <Shelf title="Already Read"/>
        </section>
        <ActionButton/>
      </div>
    )
  }
}

export default BookShelf
