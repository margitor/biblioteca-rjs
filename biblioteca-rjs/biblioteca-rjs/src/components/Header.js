import React from 'react'
import "../assets/css/Header.css";
import logo from "../assets/statics/logo.png"

export default function Header() {
  return (
    <>
    <nav className='nav-container'>
        <div className='nav-container-logo'>
           <img src={logo} alt='' className='logo' />
           <h2>Mi Biblioteca en React Js</h2>
        </div>
    </nav>
    </>
  )
}
