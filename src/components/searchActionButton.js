import React, { component } from 'react';

class SearchActionButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    )
  }
}

export default SearchActionButton;
