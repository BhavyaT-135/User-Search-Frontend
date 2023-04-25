import React from 'react';
import './tableCities.css'

function TableCities({ cities }) {
  return (
    <table className="tableCities-container">
      <thead>
        <tr className="tableCities-container-row">
          <th className="tableCities-container-heading">Name</th>
          <th className="tableCities-container-heading">User Count</th>
          <th className="tableCities-container-heading">Total Income</th>
        </tr>
      </thead>
      <tbody>
        {cities.map(city => (
          <tr key={city._id} className="tableCities-container-row">
            <td className="tableCities-container-rowData">{city._id}</td>
            <td className="tableCities-container-rowData">{city.user_count}</td>
            <td className="tableCities-container-rowData">{city.income_total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableCities