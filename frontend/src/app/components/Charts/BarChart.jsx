import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,  
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
