import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        title: 'To Kill A Mockingbird',
        author: 'Harper Lee',
        coverImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        readState: 'reading'
      },
      {
        title: "Ender's Game",
        author: 'Orson Scott Card',
        coverImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
        readState: 'reading'
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        coverImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
        readState: 'onList'
      },
      {
        title: '1776',
        author: 'David McCullough',
        coverImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
        readState: 'onList'
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
      <body>
      <h1> My Book Tracker </h1>
        <section className="bookshelf">
          <CurrentlyReading booksReading={this.state.books.filter(book => book.readState == 'reading')}/>
          <WillRead booksToRead={this.state.books.filter(book => book.readState == 'onList')}/>
          <HaveRead readBooks={this.state.books.filter(book => book.readState == 'read')}/>
        </section>
      </body>
    )
  }
}

class CurrentlyReading extends React.Component {
  render() {
    return (
      <section>
        <h3>Currently Reading</h3>
        <ol className="bookshelf-books">
        {
          this.props.booksReading.map(book => (
            <li key={book.title}>{book.title}</li>
          ))
        }
        </ol>
      </section>
    )
  }
}

class WillRead extends React.Component {
  render() {
    return (
      <section>
        <h3>Books to Read</h3>
        <ol className="bookshelf-books">
        {
          this.props.booksToRead.map(book => (
            <li key={book.title}>{book.title}</li>
          ))
        }
        </ol>
      </section>
    )
  }
}

class HaveRead extends React.Component {
  render() {
    return (
      <section>
        <h3>Books I Have Read</h3>
        <ol className="bookshelf-books">
        {
          this.props.readBooks.map(book => (
            <li key={book.title}>{book.title}</li>
          ))
        }
        </ol>
      </section>
    )
  }
}

export default BooksApp
