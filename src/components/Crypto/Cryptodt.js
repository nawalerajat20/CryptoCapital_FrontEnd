import React from 'react';
// import DataTable from './Datatbl';
import DataTable from '../DataTable/Datatbl';
// import jsonData from './data.json';
import jsonData from '../JSON-Files/data.json'

const Cryptodata = () => {
  return (
    <div className="cryptodata">
      <DataTable data={jsonData} />
    </div>
  );
}

export default Cryptodata;