// src/CryptoChart.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CryptoGraphpred = () => {
  const pred = [
    67822.15, 67595.6, 67241.84, 66572.71, 65668.57, 64696.01, 64148.94, 63449.98,
    62741.58, 62211.89, 61743.5, 61768.49, 61738.41, 61908.38, 62135.17,
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const formattedData = pred.map((value, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return { date: date.toISOString().split('T')[0], high: value };
    });
    setData(formattedData);

    // Commenting out the fetchData for now
    /*
    const fetchData = async () => {
      try {
        const response = await fetch('https://cryptobitsmodel.onrender.com/crypto/precictions?currency=BTC-USD');
        const result = await response.json();
        if (result.message === 'success') {
          const formattedData = result.data.map((value, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            return { date: date.toISOString().split('T')[0], high: value[0] };
          });
          setData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    */
// eslint-disable-next-line
  }, []);

  return (
    <div className='Graph'>
        <h2 style={{marginTop:'40px'}}>Predicted Values</h2>
    <ResponsiveContainer width="80%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="high" stroke="green" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default CryptoGraphpred;
