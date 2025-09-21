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
import { Box, Text, Flex } from "@optiaxiom/react";
import { revenueChart } from "./RevenueChart.css";

const data = [
  { month: "Jan", currentWeek: 12, previousWeek: 8 },
  { month: "Feb", currentWeek: 8, previousWeek: 17 },
  { month: "Mar", currentWeek: 12, previousWeek: 10 },
  { month: "Apr", currentWeek: 16, previousWeek: 12 },
  { month: "May", currentWeek: 19, previousWeek: 18 },
  { month: "Jun", currentWeek: 20, previousWeek: 23 },
];

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
  return (
    <Box className={revenueChart.chartContainer}>
      <ResponsiveContainer width="100%" height={340}>
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
            stroke="#f0f0f0"
            horizontal={true}
            vertical={true}
          />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
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
    </Box>
  );
};
