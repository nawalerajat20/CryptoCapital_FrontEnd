// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function Graphtime() {
  return (
    <div>
      <ul>
        <li><Link to="/graph/30">1M</Link></li>
        <li><Link to="/graph/90">3M</Link></li>
        <li><Link to="/graph/180">6M</Link></li>
        <li><Link to="/graph/365">1Y</Link></li>
      </ul>
    </div>
  );
}

export default Graphtime;
