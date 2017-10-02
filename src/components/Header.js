import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">React blog</Link>
        </li>
        <li>
          <Link to="/new-article">Write</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
