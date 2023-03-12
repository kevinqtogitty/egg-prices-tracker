import { INTERFACE_IntEggPrices } from '../App';
import React from 'react';
import {
  BarChart,
  CartesianGrid,
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
}

const IntEggChart: React.FC<Props> = ({ internationalEggPrices }) => {
  return (
    <ResponsiveContainer className={`int-egg-chart`} width="70%" height={2100}>
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
        />
        <XAxis dataKey="price" type="number" tick={false}>
          <Label
            position="top"
            value="Highest price per country in USD"
            dy={-1940}
            fontSize={50}
          />
        </XAxis>
        <Tooltip
          wrapperStyle={{
            border: '.5px solid black',
            outline: 'none',
            fontSize: '1.5rem'
          }}
        />
        <Bar
          dataKey="price"
          fill="#8884d8"
          barSize={16}
          isAnimationActive={false}
        >
          <LabelList dataKey="price" position="right" fontSize={20} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IntEggChart;
