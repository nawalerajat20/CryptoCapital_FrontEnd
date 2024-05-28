// import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { CategoryScale } from 'chart.js';

// function CryptoGraph() {
//   const ctxRef = useRef(null);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });
//   const [isLoading, setIsLoading] = useState(false); 

//   const currency = 'BTC-USD'; 

//   // useEffect(() => {
//   //   setIsLoading(true); 
//   //   const fetchData = async () => {
//   //     const response = await fetch(`https://cryptobitsmodel.onrender.com/crypto/pastData?currency=${currency}`);
//   //     const data = await response.json();

//   //     // console.log(data);
//   //     let labels;
//   //     let prices;
//   //     if(data)
//   //     {
//   //       labels = data.map((item) => item[5]); //date
//   //       prices = data.map((item) => item[0]); 
//   //     }


//   //     setChartData({
//   //       labels: labels ? labels : "13-04-2023",
//   //       datasets: [
//   //         {
//   //           label: 'Crypto Price (USD)',
//   //           data: prices ? prices : "290000.21321",
//   //           fill: false,
//   //           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//   //           borderColor: 'rgba(75, 192, 192, 1)',
//   //           pointRadius: 3,
//   //         },
//   //       ],
//   //     });
//   //     setIsLoading(false); 
//   //   };

//   //   fetchData();
//   // }, [currency]);
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://cryptobitsmodel.onrender.com/crypto/pastData?currency=${currency}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         if (data && data.length > 0) { // Ensure data is defined and not empty
//           const labels = data.map((item) => item[5]); //date
//           const prices = data.map((item) => item[0]);

//           setChartData({
//             labels: labels,
//             datasets: [
//               {
//                 label: 'Crypto Price (USD)',
//                 data: prices,
//                 fill: false,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 pointRadius: 3,
//               },
//             ],
//           });
//         } else {
//           console.error('Data is empty or invalid');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [currency]);


//   const config = {
//     type: 'line', 
//     data: chartData,
//     options: {
//       scales: {
//         x: {
//           type: CategoryScale, 
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {isLoading && <p>Loading data...</p>} 
//       <canvas ref={ctxRef} />
//       {chartData.datasets.length > 0 && <Line data={config} />} 
//     </div>
//   );
// }

// export default CryptoGraph;

// Code  2

// import React, { useState, useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";

// const CryptoGraph = () => {
//   const ctxRef = useRef(null);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const currency = "BTC-USD";
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://cryptobitsmodel.onrender.com/crypto/pastData?currency=${currency}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);

//         if (data && data.length > 0) {
//           const labels = data.map((item) => item[5]);
//           const prices = data.map((item) => item[0]);
//           if (prices && prices.length > 0 && labels && labels.length > 0) {
//             setChartData({
//               labels: labels,
//               datasets: [
//                 {
//                   label: "Crypto Price (USD)",
//                   data: prices,
//                   fill: false,
//                   backgroundColor: "rgba(75, 192, 192, 0.2)",
//                   borderColor: "rgba(75, 192, 192, 1)",
//                   pointRadius: 3,
//                 },
//               ],
//             });
//           }
//         } else {
//           console.error("Data is empty or invalid");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   const config = {
//     type: "line",
//     data: chartData,
//     options: {
//       scales: {
//         x: {
//           type: CategoryScale,
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {isLoading && <p>Loading data...</p>}
//       <canvas ref={ctxRef} />
//       {chartData.labels &&
//         chartData.labels.length > 0 &&
//         chartData.prices &&
//         chartData.prices.length > 0 &&
//         chartData.datasets.length > 0 && <Line data={config} />}
//     </div>
//   );
// };

// export default CryptoGraph;

//Code 3 : Using recharts library

// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function CryptoChart() {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://cryptobitsmodel.onrender.com/crypto/pastData');
//         const data = await response.json();
//         console.log(data);
//         setCryptoData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Extracting dates and high values from the fetched data
//   const chartData = cryptoData.map(entry => ({
//     date: entry[5], // Date is at index 5
//     high: entry[1] // High value is at index 1
//   }));

//   return (
//     <div>
//       <h2>Cryptocurrency High Values Over Time</h2>
//       <LineChart width={1500} height={600} data={chartData}>
//         <CartesianGrid strokeDasharray="5 5" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="high" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   );
// }

// export default CryptoChart;

//Area Chart

// import React, { useState, useEffect } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function CryptoGraph() {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://cryptobitsmodel.onrender.com/crypto/pastData');
//         const data = await response.json();
//         setCryptoData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Extracting dates and high values from the fetched data
//   const chartData = cryptoData.map(entry => ({
//     date: entry[5], // Date is at index 5
//     high: entry[1] // High value is at index 1
//   }));

//   return (
//     <div className='main-graph'>
//       <AreaChart width={1300} height={500} data={chartData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis className="x-axis" dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="high" fill="green" stroke="green" />
//       </AreaChart>
//     </div>
//   );
// }

// export default CryptoGraph;

// graph for 30 days
// import React, { useState, useEffect } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function CryptoGraph() {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://cryptobitsmodel.onrender.com/crypto/pastData');
//         const data = await response.json();

//         // Get the current date
//         const currentDate = new Date();

//         // Filter data for the last 30 days
//         const lastData = data.filter(entry => {
//           const entryDate = new Date(entry[5]); // Date is at index 5
//           const differenceInTime = currentDate.getTime() - entryDate.getTime();
//           const differenceInDays = differenceInTime / (1000 * 3600 * 24);
//           return differenceInDays <= 30;
//         });

//         setCryptoData(lastData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Extracting dates and high values from the fetched data
//   const chartData = cryptoData.map(entry => ({
//     date: entry[5], // Date is at index 5
//     high: entry[1] // High value is at index 1
//   }));

//   return (
//     <div>
//       <h2>Cryptocurrency High Values Over Last 30 Days</h2>
//       <AreaChart width={800} height={400} data={chartData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="high" fill="#8884d8" stroke="#8884d8" />
//       </AreaChart>
//     </div>
//   );
// }

// export default CryptoGraph;

//using props
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function CryptoGraph({ duration, symbol }) {
  const [cryptoData, setCryptoData] = useState([]);
  const currency = `${symbol}-USD`;

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(`https://cryptobitsmodel.onrender.com/crypto/pastData?currency=${currency}`);
        const data = await response.json();


        const currentDate = new Date();


        let filteredData;
        switch (duration) {
          case '30days':
            filteredData = filterDataForDays(data, currentDate, 30);
            break;
          case '90days':
            filteredData = filterDataForDays(data, currentDate, 90);
            break;
          case '180days':
            filteredData = filterDataForDays(data, currentDate, 180);
            break;
          case '365days':
            filteredData = filterDataForDays(data, currentDate, 365);
            break;
          default:
            filteredData = data;
            break;
        }

        setCryptoData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [duration, currency]);


  const chartData = cryptoData.map(entry => ({
    date: entry[5],
    high: entry[1]
  }));

  return (
    <div className='Graph'>
      <h2>Cryptocurrency High Values Over Last {duration === '365days' ? '1 Year' : duration === '180days' ? '6 Months' : duration === '90days' ? '3 Months' : '30 Days'}</h2>
      <AreaChart width={1000} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="high" fill="green" stroke="rgb(26, 224, 12" />
      </AreaChart>
    </div>
  );
}


const filterDataForDays = (data, currentDate, days) => {
  return data.filter(entry => {
    const entryDate = new Date(entry[5]); // Date is at index 5
    const differenceInTime = currentDate.getTime() - entryDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays <= days;
  });
};

export default CryptoGraph;









