
import React, { useState } from 'react';
import { Column } from '@ant-design/plots';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const DemoColumn = () => {
  const data = [
    { type: 'india', sales: 402.82 },
    { type: 'china', sales: 146.24 },
    { type: 'italy', sales: 200.72 },
    { type: 'usa', sales: 33.66 },
    { type: 'brazil', sales: 25.01 },
    { type: 'australia', sales: 3.32 },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'category',
      },
      sales: {
        alias: 'category',
      },
    },
  };
  return <Column {...config} />;
};

const DemoTable = () => {
  const columns = [
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'sales', label: 'Sales', minWidth: 100 },
  ];

  const rows = [
    { type: 'india', sales: 402.82 },
    { type: 'china', sales: 146.24 },
    { type: 'italy', sales: 200.72 },
    { type: 'usa', sales: 33.66 },
    { type: 'brazil', sales: 25.01 },
    { type: 'australia', sales: 3.32 },
  ];

  return (
    <Paper sx={{ width: '100%', marginRight: '20px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.type}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={10}
        page={0}
      />
    </Paper>
  );
};

const UIharika = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" size="large" onClick={handleOpenDialog}>
        Open Dialog
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xl">
        <DialogTitle>Add Country</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <DemoColumn />
            </div>
            <div style={{ flex: 1 }}>
              <DemoTable />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UIharika;
