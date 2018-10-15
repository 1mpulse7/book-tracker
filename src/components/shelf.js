import React, {Component} from 'react';
import BookCreator from './book.js'

class Shelf extends React.Component {
  render() {
    return (
      <section className="bookshelf">
        <h3 className="bookshelf-title">{this.props.title}</h3>
      </section>
    )
  }
}

export default Shelf
