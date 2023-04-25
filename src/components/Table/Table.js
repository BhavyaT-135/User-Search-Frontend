import React from 'react';
import './table.css'

function Table({ users }) {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-container-row">
          <th className="table-container-heading">ID</th>
          <th className="table-container-heading">First Name</th>
          <th className="table-container-heading">Last Name</th>
          <th className="table-container-heading">Income</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="table-container-row">
            <td className="table-container-rowData">{user.id}</td>
            <td className="table-container-rowData">{user.first_name}</td>
            <td className="table-container-rowData">{user.last_name}</td>
            <td className="table-container-rowData">{user.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table