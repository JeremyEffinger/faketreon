import React from 'react'
import { Outlet } from 'react-router-dom';
import { IoLogoFacebook, IoAirplaneSharp, IoAccessibilitySharp } from "react-icons/io5";
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
  return (
    <div>
    <nav className="NavbarItems">

      <h1 className="navbar-logo">
        <IoLogoFacebook />
      </h1>

      

      {/* <div className='menu-icon'></div> */}

      <ul className='nav-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      
    </nav>

    <Outlet />
    </div>
  )
}

export default Navbar
