import React from 'react';
// import Data from './data.json';

function DataTable({data}) {
  return (
    // <div>
    //   {
    //     data.map(data => {
    //       return(
    //         <div style = {{backgroundcolor : "red"}}>
    //           {data.id}
    //         </div>
    //       )
    //     })
    //   }
    // </div>
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>24h%</th>
            <th>Marketcap</th>
            <th>Volume</th>
            <th>7d Forecast</th>
            <th>Available Supply</th>
            <th>Total Supply</th>
            {/* Add more headers based on your JSON structure */}
          </tr>
        </thead>
        {/* <div> */}
          <tbody>
            {data && data.map(coins => (
              <tr key={coins.name}>
                <td className='td'><img src={coins.icon} alt={coins.icon} className='logo'/></td>
                <td className='td1'>{coins.name}</td>
                <td className='td'>{coins.price}</td>
                <td className='td'>{coins.priceChange1d}</td>
                <td className='td'>{coins.marketCap}</td>
                <td className='td'>{coins.volume}</td>
                <td className='td'>{coins.priceChange1w}</td>
                <td className='td'>{coins.availableSupply}</td>
                <td className='td'>{coins.totalSupply}</td>
                {/* Add more columns based on your JSON structure */}
              </tr>
            ))}
          </tbody>
        {/* </div> */}
    </table>
   </div>
  );
}

export default DataTable;