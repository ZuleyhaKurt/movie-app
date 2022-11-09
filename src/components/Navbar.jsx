import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-orange-600 flex justify-between items-center p-3 gap-5' >
          <div><Link  to="/" ><h1 className='text-white font-bold text-xl '>Movie App</h1></Link></div>
          <div>
              <ul className='flex list-style-none gap-2'>
                <Link  className='p-3 text-xl font-bold' to="/login">Login</Link>
                <Link className='p-3 text-xl font-bold' to="/register">Register</Link>
              </ul>
          </div>
    </div>
  )
}

export default Navbar