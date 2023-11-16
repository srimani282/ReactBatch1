import React from "react";
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function UILibrary(props) {
    function valuetext(value) {
        return `${value}°C`;
    }

    const columns = [
        { field: 'id', headerName: 'Sl No', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'baby', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return <>
        <h1>UI Library</h1>


        <Grid container spacing={2}>
        <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
                <div>
                    <Button onClick={() => { console.log("Clicked") }} variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="contained" color="error">  Success
                    </Button>
                </div>
                <div>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                    />
                </div>
                <div>

                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </div>
            </Grid>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />

        </Grid>

    </>
}

export default UILibrary;