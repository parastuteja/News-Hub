import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <>
   <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" to="#">Blog</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Contact</Link>
  </li>
  <li className="nav-item ">
    <Link className="nav-link" to="#">About</Link>
  </li>
</ul>
   
   </>
  )
}

export default Nav