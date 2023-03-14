import { INTERFACE_UsEggPrices } from '../App';
import React, { useEffect } from 'react';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface Props {
  usEggPrices: INTERFACE_UsEggPrices[];
}

const UsEggChart: React.FC<Props> = ({ usEggPrices }) => {
  return (
    <ResponsiveContainer width="60%" height={400} className={`us-egg-chart`}>
      <LineChart
        height={350}
        data={usEggPrices}
        margin={{
          top: 90,
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
          tick={{ fill: '#e1d9d1' }}
        >
          <Label
            value="Avg. Price Per Dozen"
            offset={0}
            position="top"
            dy={-230}
            fontSize={50}
            fill={'#e1d9d1'}
          />
        </XAxis>
        <YAxis dataKey="price" tick={{ fill: '#e1d9d1' }}>
          <Label
            value="US Dollars"
            offset={0}
            position="insideLeft"
            angle={-90}
            dy={50}
            fontSize={20}
            fill={'#e1d9d1'}
          />
        </YAxis>
        <Tooltip
          wrapperStyle={{
            border: '.5px solid black',
            outline: 'none',
            fontSize: '1.5rem',
            color: '#000'
          }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#ffcc5f"
          strokeWidth={2}
          activeDot={{ r: 6 }}
          isAnimationActive={false}
          animationBegin={500}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UsEggChart;
