import React from 'react';
import Logo from '../Assets/Logo_white.png';
import facebook from '../Assets/facebook_logo.png';
import twitter from '../Assets/Twitter_logo.png';
import apple from '../Assets/Apple_logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container5'>
        <div className='section1'>
          <div className='head'>
            <div ><img src={Logo} alt="" /></div>
            <div className='text'>Cryptocapital</div>
          </div>
          <div className='logo1'>
            <img src={facebook} alt="" />
            <img src={apple} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className='section2'>
          <div className='link'>
            <span>Resource</span>  <br />
            <Link className='link-text' to='/'>Get Started</Link> <br />
            <Link className='link-text' to='/features'>Features</Link> <br />
            {/* <Link className='link-text' to='/blogs'>Blogs</Link> <br /> */}
            <Link className='link-text' to='faqs'>FAQ's</Link> <br />
            <Link className='link-text' to='privacy'>Privacy Policy</Link>
          </div>
          <div className='link'>
            <span>Crypto</span>  <br />
            <Link className='link-text' to='/trends'>Trends</Link> <br />
            <Link className='link-text' to='/cryptoinfo'>Cryprocurrency</Link> <br />
            <Link className='link-text' to='/predictions'>Prediction</Link> <br />
            {/* <Link className='link-text' to='/news'>News</Link> */}
          </div>
          <div className='link'>
            <span>Support</span>  <br />
            <Link className='link-text' to='/contact'>Contact Us</Link> <br />
            <Link className='link-text' to='/report_a_bug'>Report a bug</Link> <br />
            <Link className='link-text' to='/request_a_feature'>Request a feature</Link> <br />
            <Link className='link-text' to='/feedback'>Feedback</Link>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='border'></div>
        <span>Cryptocapital &copy;2023 - All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer