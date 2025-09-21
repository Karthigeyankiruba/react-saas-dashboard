import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Text } from "@optiaxiom/react";
import { revenueChart } from "./RevenueChart.css";
import { getRevenueChartData } from "../../../../data/dataService";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box className={revenueChart.tooltip}>
        <Text size="sm" fontWeight="600">
          {label}
        </Text>
        {payload.map((entry: any, index: number) => (
          <Text key={index} size="sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}M
          </Text>
        ))}
      </Box>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  const data = getRevenueChartData();

  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="0"
          stroke="var(--border-color)"
          horizontal={true}
          vertical={true}
        />
        <XAxis
          dataKey="month"
          axisLine={{ stroke: "var(--border-color)", strokeWidth: 1 }}
          tickLine={false}
          tick={{ fontSize: 12, fill: "var(--text-secondary)" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "var(--text-secondary)" }}
          tickFormatter={(value) => `${value}M`}
          domain={[0, 30]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="currentWeek"
          stroke="#000000"
          strokeWidth={2}
          strokeDasharray="0"
          dot={false}
          activeDot={{ r: 4, fill: "#000000" }}
        />
        <Line
          type="monotone"
          dataKey="previousWeek"
          stroke="#87CEEB"
          strokeWidth={2}
          strokeDasharray="0"
          dot={false}
          activeDot={{ r: 4, fill: "#87CEEB" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
