import React from 'react'
import {NavLink ,Routes,Route} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";




function Nav() {
  return (
    <>
    <nav className='flex justify-evenly'>
        <NavLink to={'/'}>
            <FaHome/>
        </NavLink>     
        <NavLink to={'/My-products'}>
            <FaUser/>
        </NavLink>   
        <NavLink to={"/Add product"}>
        <FcLike/>

        </NavLink>     
        <NavLink to={'/cart'}>
            <FaShoppingCart/>
        </NavLink>     
    </nav>
    </>

  )
}

export default Nav
