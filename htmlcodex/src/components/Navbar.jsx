import React from 'react'
import { NavLink, Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 items-center font-medium'>
      <Link to="/">
        <img src="src/assets/htmlcodex-2x.png" alt="logo-image" className='w-36' />
      </Link>
      <ul className='hidden sm:flex gap-8 text-base font-extrabold text-gray-700 '>
        <NavLink to={"/freetemplates"} className={"hover:text-blue-400 transition-all duration-300"}>
          <p>Free Templates</p>
        </NavLink>
        <NavLink to={"/premiumtemplates"} className={"hover:text-blue-400 transition-all duration-300"}>
          <p>Premium Templates</p>
        </NavLink>
        <NavLink to={"/templatelicense"} className={"hover:text-blue-400 transition-all duration-300"}>
          <p>Template Lincense</p>
        </NavLink>
        <NavLink to={"/removecredit"} className={"hover:text-blue-400 transition-all duration-300"}>
          <p>Remove Credit</p>
        </NavLink>
        <NavLink to={"/contactus"} className={"hover:text-blue-400 transition-all duration-300"}>
          <p>Contact Us</p>
        </NavLink>
        <img src="src/assets/search-solid.svg" className='w-4 cursor-pointer' alt="search-icon" />

        <img src="src/assets/bars-solid.svg" alt="menu" className='w-4 cursor-pointer'/>
      </ul>
      

    </div>
  )
}

export default Navbar