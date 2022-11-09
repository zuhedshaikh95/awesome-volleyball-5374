import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/postadd"> Postadd</Link>
        <Link to="/sellpage"> Sellpage</Link>
    </div>
  )
}

export default Navbar