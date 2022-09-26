import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <div>
    <header className="header">
        <div className="container" >  
            <img src={logo} alt="Airtel" className="logo-img" />
        </div>
    </header>
    </div>
  )
}

export default Header