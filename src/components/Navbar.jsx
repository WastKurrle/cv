import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-around p-3 bg-gray-900 text-gray-300 font-semibold">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about-me'>Über mich</NavLink>
      <NavLink to='projects'>Projekte</NavLink>
    </div>
  )
}

export default Navbar