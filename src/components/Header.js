import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/header.css'

function Home() {
  return (
    <header className="centerh centerv">
      <ul className="frow">
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/new-article">Write</Link>
        </li>
      </ul>
    </header>
  )
}

export default Home
