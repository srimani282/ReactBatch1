import React, { useState, useEffect } from 'react';
import { Column, Line } from '@ant-design/plots';
import Grid from '@mui/material/Grid';

const GraphApi = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(d=>d.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])
  const data = [
    {
      name: 'Five Star',
      id: 38,
    },
    {
      name: 'Dairy milk',
      id: 52,
    },
    
    {
      name: 'Milkybar',
      id: 100,
    }
    ,
    {
      name: 'Bounty',
      id: 70,
    }
  ];
  const config = {
    data : users,
    xField: 'name',
    yField: 'id',
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
        alias: 'Chocolate',
      },
      sales: {
        alias: 'units sold',
      },
    },
  };
  const config2 = {
    data : users,
    padding: 'auto',
    xField: 'name',
    yField: 'id',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return <div>
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Column {...config} />
        </Grid>
        <Grid item xs={6}>
            <Line {...config2} />
        </Grid>
    </Grid>
    
    </div>;
};

export default GraphApi;
