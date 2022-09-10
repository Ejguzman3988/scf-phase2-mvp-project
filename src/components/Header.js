import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/resources/new">New Resource</Link>
      <Link to="/resources">List of Resources</Link>
    </div>
  )
}

export default Header