import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

const Navbar = () => {
  return (
    <div className="flex justify-around p-3 bg-gray-900 text-gray-300 font-semibold">
        <Link to='/' className='hover:scale-110 duration-200 hover:text-gray-100'><FontAwesomeIcon icon="fa-solid fa-house-chimney" /></Link>
        <Link to='/about-me' className='hover:scale-110 duration-200 hover:text-gray-100'>Über mich</Link>
        <Link to='/projects' className='hover:scale-110 duration-200 hover:text-gray-100'>Projekte</Link>
    </div>
  )
}

export default Navbar