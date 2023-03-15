import { INTERFACE_IntEggPrices } from '../App';
import React from 'react';
import {
  BarChart,
  YAxis,
  XAxis,
  Label,
  Bar,
  LabelList,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface Props {
  internationalEggPrices: INTERFACE_IntEggPrices[];
  windowWidth: Number;
}

const IntEggChart: React.FC<Props> = ({
  internationalEggPrices,
  windowWidth
}) => {
  return (
    <ResponsiveContainer className={`int-egg-chart`} width="80%" height={2100}>
      <BarChart
        data={internationalEggPrices}
        layout={'vertical'}
        margin={{
          top: 170,
          right: 50,
          left: 50
        }}
      >
        <YAxis
          dataKey="country"
          type="category"
          fontSize={16}
          tickLine={false}
          tick={{ fill: '#e1d9d1' }}
        />
        <XAxis dataKey="price" type="number" tick={{ fill: '#e1d9d1' }}>
          <Label
            position="top"
            value="Int prices in USD"
            dy={-1940}
            dx={windowWidth < 1000 ? -25 : 0}
            fontSize={`${windowWidth < 1000 ? 30 : 50}`}
            fill={'#e1d9d1'}
          />
        </XAxis>
        <Tooltip
          cursor={{ fill: 'none' }}
          wrapperStyle={{
            border: '.5px solid black',
            outline: 'none',
            fontSize: '1.5rem',
            color: '#000',
            backgroundColor: 'rgb(200,200,50)'
          }}
        />
        <Bar
          dataKey="price"
          fill="#ffcc5f"
          barSize={16}
          isAnimationActive={false}
        >
          <LabelList
            dataKey="price"
            position="right"
            fontSize={20}
            fill={'#e1d9d1'}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IntEggChart;
