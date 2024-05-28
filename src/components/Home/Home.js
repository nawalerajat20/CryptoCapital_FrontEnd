import React from 'react'
// import animation from '../animation.png'
import lottie1 from '../Assets/lottie-1.json';
// import Cryptodata from './Cryptodt';
// import Footer from './Footer';
// import Table from './Table';
import Table from '../DataTable/Table';
import Lottie from 'lottie-react';

const Home = () => {
  return (
    <div className='Home'>
      <div className='containers'>
        <div className='info'>
          <div id='content'>
            <span>Cryptocurrency &nbsp;&nbsp;&nbsp;Price Predictions &nbsp;for &nbsp;&nbsp;&nbsp;&nbsp;2023, 2024-2026 </span>
            <br /><br /><br />
              At CryptoPredictions we provide daily, monthly and yearly predictions for over 19 000 cryptocurrencies. While we provide one of the most accurate predictions for cryptocurrencies on the market, they should never be taken as financial advice. Always do your due diligence before investing.
          </div>
          <div id='search'>
            {/* <button type="submit"><i class=" fa-solid fa-magnifying-glass"></i></button> */}
            <input type="text" placeholder="Search token or asset"/>
          </div>
        </div>
        <div id='animation'>
          {/* <img src={require("../animation.png")} alt="" /> */}
          <Lottie className="lottie" animationData={lottie1} />
        </div>
      </div>
      <div>
          <Table/>
      </div>
    </div>
  )
}

export default Home