import React from 'react';
// import data from './data.json';
import data from '../JSON-Files/data.json';

function Table() {
    return (
        <div>
            <table>
                <thead>
                    <tr className='thead'>
                        <th className='name'># Name</th>
                        <th>Price</th>
                        <th>24h%</th>
                        <th>Marketcap</th>
                        <th>Volume</th>
                        <th>7d Forecast</th>
                        <th>Available Supply</th>
                        <th>Total Supply</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(coins => (
                        <tr key={coins.rank}>
                            <td className='column1'>
                                <img src={coins.icon} alt="" />
                                <h4>{coins.name}</h4>
                            </td>
                            <td>{coins.price}</td>
                            <td style={{ color: coins.priceChange1d < 0 ? 'red' : 'green' }}>{coins.priceChange1d}</td>
                            <td>{coins.marketCap}</td>
                            <td>{coins.volume}</td>
                            <td style={{ color: coins.priceChange1w < 0 ? 'red' : 'green' }}>{coins.priceChange1w}</td>
                            <td>{coins.availableSupply}</td>
                            <td>{coins.totalSupply}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table