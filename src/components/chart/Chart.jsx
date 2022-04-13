import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./Chart.css";

const Chart = ({data, dataKey, title, grid}) => {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip stroke="#000000" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5067A3"
          />
          {grid && <CartesianGrid stroke="#8DA399" strokeDasharray="8 8" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
