import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../assets/css/dashboard.css";

interface ChartCardProps {
  title: string;
  data: { name: string; value: number }[];
  colors: string[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, colors }) => {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            label>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
