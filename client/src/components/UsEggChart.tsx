import { INTERFACE_UsEggPrices } from '../App';
import React from 'react';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface Props {
  usEggPrices: INTERFACE_UsEggPrices[];
}

const UsEggChart: React.FC<Props> = ({ usEggPrices }) => {
  return (
    <LineChart
      width={800}
      height={350}
      data={usEggPrices}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 90
      }}
    >
      <CartesianGrid strokeDasharray={'3 3'} />
      <XAxis
        dataKey="date"
        angle={-45}
        height={10}
        dy={30}
        dx={-25}
        fontSize={20}
      >
        <Label
          value="Avg. Price Per Dozen"
          offset={0}
          position="top"
          dy={-230}
          fontSize={26}
        />
      </XAxis>
      <YAxis dataKey="price">
        <Label
          value="US Dollars"
          offset={0}
          position="insideLeft"
          angle={-90}
          dy={50}
          fontSize={20}
        />
      </YAxis>
      <Tooltip
        wrapperStyle={{
          border: '.5px solid black',
          outline: 'none',
          fontSize: '1.5rem'
        }}
      />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        strokeWidth={2}
        activeDot={{ r: 6 }}
        isAnimationActive={false}
        animationBegin={500}
        dot={false}
      />
    </LineChart>
  );
};

export default UsEggChart;
