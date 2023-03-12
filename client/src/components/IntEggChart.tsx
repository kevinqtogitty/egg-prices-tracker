import { INTERFACE_IntEggPrices } from '../App';
import React from 'react';
import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Label,
  Bar,
  LabelList
} from 'recharts';

interface Props {
  internationalEggPrices: INTERFACE_IntEggPrices[];
}

const IntEggChart: React.FC<Props> = ({ internationalEggPrices }) => {
  return (
    <BarChart
      width={730}
      height={2000}
      data={internationalEggPrices}
      layout={'vertical'}
      margin={{
        top: 50,
        right: 30,
        left: 50
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis dataKey="country" type="category" fontSize={16} tickLine={false} />
      <XAxis dataKey="price" type="number">
        <Label
          position="top"
          value="Highest reported price per country in USD"
          dy={-1940}
          fontSize={26}
        />
      </XAxis>
      <Bar
        dataKey="price"
        fill="#8884d8"
        barSize={16}
        isAnimationActive={false}
      >
        <LabelList dataKey="price" position="right" fontSize={20} />
      </Bar>
    </BarChart>
  );
};

export default IntEggChart;
