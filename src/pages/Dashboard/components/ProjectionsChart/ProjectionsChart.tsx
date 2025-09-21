import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Card, Text } from "@optiaxiom/react";
import { projectionsChart } from "./ProjectionsChart.css";

const data = [
  { month: "Jan", actuals: 16, projections: 4 },
  { month: "Feb", actuals: 20, projections: 5 },
  { month: "Mar", actuals: 17, projections: 4 },
  { month: "Apr", actuals: 21, projections: 6 },
  { month: "May", actuals: 14, projections: 4 },
  { month: "Jun", actuals: 20, projections: 5 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const actuals =
      payload.find((p: any) => p.dataKey === "actuals")?.value || 0;
    const projections =
      payload.find((p: any) => p.dataKey === "projections")?.value || 0;
    const total = actuals + projections;

    return (
      <Box className={projectionsChart.tooltip}>
        <Text size="sm" fontWeight="600">
          {label}
        </Text>
        <Text size="sm">Actuals: {actuals}M</Text>
        <Text size="sm">Projections: {projections}M</Text>
        <Text size="sm" fontWeight="600">
          Total: {total}M
        </Text>
      </Box>
    );
  }
  return null;
};

export const ProjectionsChart: React.FC = () => {
  return (
    <Card className={projectionsChart.container}>
      <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
        Projections vs Actuals
      </Text>

      <Box className={projectionsChart.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            maxBarSize={20}
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
              vertical={false}
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
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="#a8c5da"
              radius={[0, 0, 2, 2]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="#cfdfeb"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};
