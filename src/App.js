import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/shelf.js'
import BookCreator from './components/book.js'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        title: 'To Kill A Mockingbird',
        author: 'Harper Lee',
        coverImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        readState: 'CurrentlyReading'
      },
      {
        title: "Ender's Game",
        author: 'Orson Scott Card',
        coverImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
        readState: 'CurrentlyReading'
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        coverImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
        readState: 'wantToRead'
      },
      {
        title: '1776',
        author: 'David McCullough',
        coverImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
        readState: 'wantToRead'
      },
      {
        title: 'The Hobbit',
        author: 'J.R. Tolkien',
        coverImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
        readState: 'read'
      },
      {
        title: "Oh, the Places You'll Go!",
        author: 'Dr. Suess',
        coverImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
        readState: 'read'
      },
      {
        title: "The Adventures of Tom Sawyer",
        author: 'Mark Twain',
        coverImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
        readState: 'read'
      }
    ]
  }

  render() {
    return (
      <body className="app">
      <BookShelf booksList={this.state.books}/>
      </body>
    )
  }
}

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
      </div>
    )
  }
}

class WillRead extends React.Component {
  render() {
    return (
      <section className="bookshelf">
        <h3 className="bookshelf-title">Books to Read</h3>
        <div className="bookshelf-books">
          <BookCreator booksToCreate={this.props.booksToRead}/>
        </div>
      </section>
    )
  }
}

class HaveRead extends React.Component {
  render() {
    return (
      <section className="bookshelf">
        <h3 className="bookshelf-title">Books I Have Read</h3>
        <BookCreator booksToCreate={this.props.readBooks}/>
      </section>
    )
  }
}


// component that creates the books into list items
export default BooksApp
