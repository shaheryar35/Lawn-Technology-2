import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '1st Week', searches: 100, amt: 2400,
  },
  {
    name: '2nd Week', searches: 200, amt: 2210,
  },
  {
    name: '3rd Week', searches: 300, amt: 2290,
  },
  {
    name: '4th Week', searches: 780, amt: 2000,
  },
//   {
//     name: 'Page E', searches: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', searches: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', searches: 4300, amt: 2100,
//   },
];

export default class RecentActivity extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="searches" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    );
  }
}
