import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/postadd"> Postadd</Link>
        <Link to="/sellpage"> Sellpage</Link>
        <Link to="/yourad"> Your Ads</Link>
        <Link to="/house"> House</Link>
        <Link to="/car"> Car</Link>
        <Link to="/bike"> Bike</Link>
        <Link to="/mobile"> Mobile</Link>
        <Link to="/laptop"> Laptop</Link>
    </div>
  )
}

export default Navbar