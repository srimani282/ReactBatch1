import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Address', headerName: 'Address', width: 130 },
  { field: 'Email', headerName: 'Email', width: 130 },
  { field: 'Phone', headerName: 'Phone', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, Address: 'finland',Email:'jon12@gmail.com',Phone:'123456789',Name: 'Jon', age: 35 },
  { id: 2, Address: 'switzerland',Email:'cersei132@gmail.com',Phone:'234567891' ,Name: 'Cersei', age: 42 },
  { id: 3, Address: 'greenland',Email:'jaime1342@gmail.com',Phone:'923456781', Name: 'Jaime', age: 45 },
  { id: 4, Address: 'england',Email:'arya4132@gmail.com',Phone:'234567801', Name: 'Arya', age: 16 },
  { id: 5, Address: 'thailand',Email:'daenerys0532@gmail.com',Phone:'204567891' , Name: 'Daenerys', age: 50 },
  { id: 6, Address: 'newzealand',Email:'tyron132@gmail.com',Phone:'234507891', Name: 'tyron', age: 40 },
  { id: 7, Address: 'netherlands',Email:'ferrara1302@gmail.com',Phone:'204567891', Name: 'Ferrara', age: 44 },
  { id: 8, Address: 'ireland',Email:'rossini032@gmail.com',Phone:'234517891', Name: 'Rossini', age: 36 },
  { id: 9, Address: 'scotland',Email:'harvey139@gmail.com',Phone:'234967891', Name: 'Harvey', age: 65 },
  { id: 10, Address: 'somaliland',Email:'stark132@gmail.com',Phone:'238567891', Name: 'Stark', age: 20 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}