import React, { useState , useEffect } from 'react';
import CryptoGraph from './CryptoGraph';
// import icon from './crypto_icon.png';
import icon from '../Assets/crypto_icon.png';
import { useParams } from 'react-router-dom';
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import CryptoGraphpred from './CryptoGraph-pred';

function CryptoPrediction(name) {
  const [time, settime] = useState("");
  const {currencyName,symbolName}=useParams();
 // 
 console.log(currencyName, symbolName);
 const [data, setData] = useState("");
 const currency = `${symbolName}USD`;
 const currency1 = `${symbolName}-USD`
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`https://cryptobitsmodel.onrender.com/crypto/pastData?currency=${currency1}`);
        const data = await response.json();

        // Get today's date
        const today = new Date().toISOString().slice(0, 10);

        // Find the entry for today's date
        const todayEntry = data.find(entry => entry[5] === today);

        if (todayEntry) {
          const volume = Math.round(todayEntry[4]/1000); // Volume is at index 4
          const previousClose = Math.round(todayEntry[0]); // Previous day close is at index 0
          const open = Math.round(todayEntry[3]); // Open is at index 3

          setData({ volume, previousClose, open });
        } else {
          setData({ error: 'Data not available for today' });
        }
      } catch (error) {
        setData({ error: 'Error fetching data' });
      }
    };

    fetchCryptoData();
  }, [currency1]);

 //


  return (
    <div className='main-data'>
      <div className='crypto_information'> 
        <div className='crypto-logo'>
          <img src={icon} alt="" style={{width:'55px'}}/>
        </div>
        <div className='crypto-name'>
          <h4>{currencyName} / U.S.Dollor</h4>
          <h5>{data.open} &nbsp;&nbsp;<span style={{ color: (data.open - data.previousClose) < 0 ? 'red' : 'green', fontWeight:'550', fontSize:'15px' }}>{data.open - data.previousClose}&nbsp;&nbsp;{Math.round((((data.open - data.previousClose)/data.previousClose)*100)*100)/100}&nbsp;%</span> </h5>
          
        </div>
        
      </div>
      <ul className='duration'>
        <button onClick={()=>{settime('30days')}}>1M</button>
        <button onClick={()=>{settime('90days')}}>3M</button>
        <button onClick={()=>{settime('180days')}}>6M</button>
        <button onClick={()=>{settime('365days')}}>1Y</button>
      </ul>
      <CryptoGraph duration = {time} symbol={symbolName}/>
      <div>
      <h2>Key Data Points</h2>
      {data ? (
        <div className='crypto-pred-main'>
          <div className='crypto-pred'>
              <h6>Volume</h6>
              <h5>{data.volume}&nbsp;K</h5>
          </div>
          <div className='crypto-pred'>
              <h6>Open</h6>
              <h5>{data.open}&nbsp;USDT</h5>
          </div>
          <div className='crypto-pred'>
              <h6>Close</h6>
              <h5>{data.previousClose}&nbsp;USDT</h5>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div><TechnicalAnalysis colorTheme="light" width="100%" symbol={currency}></TechnicalAnalysis></div>
      {/* <h4 style={{fontFamily : 'Times New Roman', marginTop:'70px', textAlign:'center', marginBottom:'70px', fontWeight:'700', color}}>Precited Values for {currencyName} </h4> */}
      <CryptoGraphpred symbol = {symbolName} name = {currencyName}/>
    </div>
      
      

      {/* <CryptoGraph duration="30days" />
      <CryptoGraph duration="90days" />
      <CryptoGraph duration="180days" />
      <CryptoGraph duration="365days" /> */}
    </div>
    
  )
}

export default CryptoPrediction
