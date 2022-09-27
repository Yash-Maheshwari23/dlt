import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <div className="header-div">
    <header className="header">
        <div className="container container1" >  
            <img src={logo} alt="Airtel" className="logo-img" />
        </div>
    </header>
    </div>
  )
}

export default Header