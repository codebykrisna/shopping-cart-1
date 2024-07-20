import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import logo from "../assets/logo1.png"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {cart} = useSelector((state)=> state);
  return (
    <div>
      <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink link to ="/">
        <div className='ml-5'>
        <img src={logo} alt="img" className='h-16 w-36 object-contain'/>
        </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink link to ="/"><p>Home</p></NavLink>
          <NavLink link to="/cart"><div className='relative'><FaShoppingCart className='text-2xl'/>
          {
            cart.length > 0 &&
          <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce text-white rounded-full'>{cart.length}</span>
          }
          </div></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar