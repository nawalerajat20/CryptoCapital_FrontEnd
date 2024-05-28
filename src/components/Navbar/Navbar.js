import React from 'react';
// import {Link} from react-router-dom;
import Logo from '../Assets/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="heading">
            <div ><img src={Logo} alt="" /></div>
            <div className='text'>Cryptocapital</div>
        </div>
        <div className="navcomp">
            <div className="home">
              <Link to="/">Home</Link>
            </div>
            <div className="crypto">
              <Link to="/about">About</Link>
            </div>
            <div className="products">
              <Link to="/cryptoinfo">Crypto</Link>
            </div>
            <div className="news">
              <Link to="/predictions">Predictions</Link>
            </div>
            <div className="contact">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="Login">
              <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar