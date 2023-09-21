import React from 'react';

function Table() {
  // Sample data
  const data = [
    {
      customerName: 'John Doe',
      services: 'Haircut, Manicure',
      preferredTime: '10:00 AM',
      customerNumber: '123-456-7890',
      status: 'Pending',
    },
    {
      customerName: 'Jane Smith',
      services: 'Pedicure',
      preferredTime: '2:30 PM',
      customerNumber: '987-654-3210',
      status: 'Confirmed',
    },
    {
        customerName: 'Jane Smith',
        services: 'Pedicure',
        preferredTime: '2:30 PM',
        customerNumber: '987-654-3210',
        status: 'Confirmed',
      },
    // Add more data as needed
  ];

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={headerCellStyle}>CUSTOMER'S NAME</th>
            <th style={headerCellStyle}>SERVICES</th>
            <th style={headerCellStyle}>PREFERRED TIME</th>
            <th style={headerCellStyle}>CUSTOMER'S NUMBER</th>
            <th style={headerCellStyle}>STATUS</th>
            <th style={headerCellStyle}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={cellStyle}>{row.customerName}</td>
              <td style={cellStyle}>{row.services}</td>
              <td style={cellStyle}>{row.preferredTime}</td>
              <td style={cellStyle}>{row.customerNumber}</td>
              <td style={cellStyle}>{row.status}</td>
              <td style={cellStyle}>
                {/* Add action buttons or links here */}
                <button style={buttonStyle}>Edit</button>
                <button style={buttonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Define inline CSS styles
const headerCellStyle = {
  backgroundColor: '#F3EED8',
  padding: '10px',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

const cellStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
  backgroundColor: 'white',
  border:'1px solid black'
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  cursor: 'pointer',
};

export default Table;
