import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardHeader, Text, Flex, Box } from "@optiaxiom/react";
import { totalSales } from "./TotalSales.css";
import { Circle } from "lucide-react";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#22c55e" },
  { name: "Sponsored", value: 154.02, color: "#a855f7" },
  { name: "E-mail", value: 48.96, color: "#3b82f6" },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const CustomLabel = ({ cx, cy }: any) => {
  return (
    <Box className={totalSales.centerLabel}>
      <Text size="lg" fontWeight="600" color="fg.avatar.neutral">
        38.6%
      </Text>
    </Box>
  );
};

const LegendItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <Flex
      key={index}
      flexDirection="row"
      alignItems="center"
      gap="8"
      justifyContent="space-between"
      w="full"
    >
      <Flex flexDirection="row" gap="8" alignItems="center">
        <Circle size={12} stroke="transparent" style={{ fill: item.color }} />
        <Text>{item.name}</Text>
      </Flex>

      <Text fontWeight="600" color="fg.avatar.neutral">
        {formatCurrency(item.value)}
      </Text>
    </Flex>
  );
};

export const TotalSales: React.FC = () => {
  return (
    <Card className={totalSales.container}>
      <CardHeader>
        <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
          Total Sales
        </Text>
      </CardHeader>

      <Box className={totalSales.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              label={<CustomLabel />}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Flex flexDirection="column" gap="8" w="full">
        {data.map((item, index) => (
          <LegendItem key={index} item={item} index={index} />
        ))}
      </Flex>
    </Card>
  );
};
