// GraphWithTable.js
import React, { useState, useEffect } from 'react';
import { Column, Line } from '@ant-design/plots';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const GraphWithTable = () => {
  // Graph data
  const graphData = [
    { name: 'Product A', id: 20 },
    { name: 'Product B', id: 35 },
    { name: 'Product C', id: 50 },
    { name: 'Product D', id: 42 },
  ];

  // Table data
  const tableColumns: GridColDef[] = [
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'id', headerName: 'ID', width: 70 },
  ];

  const tableData = [
    { id: 1, name: 'Product A', id: 20 },
    { id: 2, name: 'Product B', id: 35 },
    { id: 3, name: 'Product C', id: 50 },
    { id: 4, name: 'Product D', id: 42 },
  ];

  // Graph configuration
  const graphConfig = {
    data: graphData,
    xField: 'name',
    yField: 'id',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
  };

  // Table configuration
  const tableConfig = {
    rows: tableData,
    columns: tableColumns,
    pageSize: 5,
    checkboxSelection: true,
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Column {...graphConfig} />
        </Grid>
        <Grid item xs={6}>
          <Line {...graphConfig} />
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid {...tableConfig} />
      </div>
    </div>
  );
};

export default GraphWithTable;
