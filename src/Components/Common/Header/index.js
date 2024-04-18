import React from 'react'
import "./styles.css"
import AnchorTemporaryDrawer from "./drawer.js"
import Button from '../Button/index.js'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='navbar'>
        <h1 className='logo'>Cryptox<span style={{color : "var(--blue)"}}>.</span></h1>
        <div className='links'>
            <Link to='/'><p className='link'>Home</p></Link>
            <Link to='/compare'><p className='link'>Compare</p></Link>
            <Link to='/dashboard'><Button text={"Dashboard"} onClick={() => console.log("btn clicked")} outlined={false} /></Link>

        </div>
        <div className='mobile-drawer'><AnchorTemporaryDrawer /></div>
    </div>
  )
}

export default Header