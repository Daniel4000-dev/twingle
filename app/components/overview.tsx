"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1st",
    uv: 2900,
    pv: 3986,
    amt: 2400,
  },
  {
    name: "2nd",
    uv: 3300,
    pv: 3598,
    amt: 2210,
  },
  {
    name: "3rd",
    uv: 2600,
    pv: 3300,
    amt: 2290,
  },
  {
    name: "4th",
    uv: 2280,
    pv: 1908,
    amt: 2000,
  },
  {
    name: "5th",
    uv: 2290,
    pv: 2100,
    amt: 2181,
  },
  {
    name: "6th",
    uv: 2490,
    pv: 2300,
    amt: 2500,
  },
  {
    name: "7th",
    uv: 3390,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "8th",
    uv: 3230,
    pv: 3600,
    amt: 2181,
  },
  {
    name: "9th",
    uv: 3390,
    pv: 3600,
    amt: 2500,
  },
  {
    name: "10th",
    uv: 3490,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "11th",
    uv: 3490,
    pv: 3800,
    amt: 2181,
  },
  {
    name: "12th",
    uv: 3190,
    pv: 3400,
    amt: 2500,
  },
  {
    name: "13th",
    uv: 3490,
    pv: 3700,
    amt: 2100,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={20}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#ff4949"
          activeBar={<Rectangle fill="pink" stroke="red" />}
        />
        <Bar
          dataKey="uv"
          fill="#dedede"
          activeBar={<Rectangle fill="gold" stroke="gray" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
