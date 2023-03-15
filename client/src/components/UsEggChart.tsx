import { INTERFACE_UsEggPrices } from '../App';
import React from 'react';
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
  windowWidth: Number;
}

const UsEggChart: React.FC<Props> = ({ usEggPrices, windowWidth }) => {
  return (
    <ResponsiveContainer width="80%" height={400} className={`us-egg-chart`}>
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
          interval={'preserveEnd'}
        >
          <Label
            value="Price per dozen"
            offset={0}
            position="top"
            dy={-230}
            dx={windowWidth < 1000 ? -25 : 0}
            fontSize={`${windowWidth < 1000 ? 30 : 50}`}
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
            fontSize: '1.5rem'
          }}
          itemStyle={{
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
