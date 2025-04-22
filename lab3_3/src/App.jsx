import { useState } from 'react';

const data = [
  { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
  { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
  { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
];

export default function App() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null); // 'asc', 'desc', or null

  const handleSort = (column) => {
    if (sortColumn === column) {
      const nextOrder = sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? null : 'asc';
      setSortOrder(nextOrder);
      if (!nextOrder) setSortColumn(null);
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortedData = () => {
    if (!sortColumn || !sortOrder) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (typeof aVal === 'number') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortOrder === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  };

  const columns = Object.keys(data[0]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sortable Table</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                onClick={() => handleSort(col)}
                style={{ cursor: 'pointer' }}
              >
                {col}
                {sortColumn === col && (sortOrder === 'asc' ? ' ▲' : sortOrder === 'desc' ? ' ▼' : '')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getSortedData().map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
