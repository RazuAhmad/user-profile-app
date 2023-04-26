import { Navbar } from 'flowbite-react'
import React from 'react'
import {  NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
   <>
   <Navbar
  fluid={true}
  rounded={true}
   
>
  <Navbar.Brand
   
    to="/navbars"
    className='cursor-pointer ml-4 lg:ml-8'
  >
    
    <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white ">
      HK Professional
    </span>
  </Navbar.Brand>
  <Navbar.Toggle  />
  <Navbar.Collapse className='mr-6 lg:mr-12'>
   

    <NavLink to='/'>
    <Navbar.Link  className='text-xl cursor-pointer mr-2 lg:mr-4 hover:underline'>
     Home
    </Navbar.Link>
    </NavLink>

    <NavLink to="/allUsers">
    <Navbar.Link
      className='text-xl  cursor-pointer mr-2 lg:mr-4 hover:underline'
    >
     All User Profile
    </Navbar.Link>
    </NavLink>

    <NavLink to="/aboutUs">
    <Navbar.Link  className='text-xl cursor-pointer mr-2 lg:mr-4 hover:underline'>
      About us
    </Navbar.Link>
    </NavLink>

    
  </Navbar.Collapse>
</Navbar>
   </>
  )
}

export default NavigationBar