import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Graphs = () => {
  const data = [
    {
      type: 'Five Star',
      sales: 38,
    },
    {
      type: 'Dairy milk',
      sales: 52,
    },
    
    {
      type: 'Milkybar',
      sales: 100,
    }
    ,
    {
      type: 'Bounty',
      sales: 70,
    }
  ];
  const config = {
    data : data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
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
  return <div>
    <Column {...config} />
    </div>;
};

export default Graphs;
