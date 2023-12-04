
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Pie } from '@ant-design/plots';

const UserDetails = ({ user }) => (
  <div>
    <h2>User Details</h2>
    <p>Name: {user.name}</p>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    {/* Add more details as needed */}
  </div>
);

const GraphApi = () => {
  const [users, setUsers] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        // Prepare pie data based on fetched user data
        const newData = data.map(user => ({
          type: user.username,
          value: 1,
          userId: user.id,
        }));
        setPieData(newData);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handlePieClick = (_, data) => {
    const clickedUserId = data[0]?.data?.userId || null;
    setSelectedUserId(clickedUserId);
  };

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
    onElementClick: handlePieClick,
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, height: 400, width: '50%' }}>
        <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
      </div>
      <div style={{ flex: 1, height: 400, width: '50%' }}>
        <Pie {...pieConfig} />
        {selectedUserId && <UserDetails user={users.find(user => user.id === selectedUserId)} />}
      </div>
    </div>
  );
};

export default GraphApi;
