import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Pie } from '@ant-design/plots';

const GraphApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'address',
      headerName: 'Address',
      width: 300,
      valueGetter: (params) => {
        return `${params.row.address.street}, ${params.row.address.suite}, ${params.row.address.city}, ${params.row.address.zipcode}`;
      },
    },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'website', headerName: 'Website', width: 200 },
    {
      field: 'company',
      headerName: 'Company',
      width: 200,
      valueGetter: (params) => {
        return params.row.company.name;
      },
    },
  ];

  const pieData = [
    { type: 'id-1', value: 10 },
    { type: 'id-2', value: 10 },
    { type: 'id-3', value: 10 },
    { type: 'id-4', value: 10 },
    { type: 'id-5', value: 10 },
    { type: 'id-6', value: 10 },
    { type: 'id-7', value: 10 },
    { type: 'id-8', value: 10 },
    { type: 'id-9', value: 10 },
    { type: 'id-10', value: 10 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, height: 400, width: '50%' }}>
        <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
      </div>
      <div style={{ flex: 1, height: 400, width: '50%' }}>
        <Pie {...pieConfig} />
      </div>
    </div>
  );
};

export default GraphApi;

