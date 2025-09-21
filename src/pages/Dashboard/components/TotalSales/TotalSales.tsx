import React from "react";
import { Box, Card, CardHeader, Flex, Text } from "@optiaxiom/react";
import { totalSales } from "./TotalSales.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Circle } from "lucide-react";
import { getTotalSalesData } from "../../../../data/dataService";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const p = payload[0];
    return (
      <Box
        className={totalSales.centerLabel}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Text size="lg" fontWeight="600" color="fg.accent">
          {formatCurrency(p.value)}
        </Text>
      </Box>
    );
  }
  return null;
};

export const TotalSales: React.FC = () => {
  const data = getTotalSalesData();

  return (
    <Card className={totalSales.container}>
      <CardHeader>
        <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
          Total Sales
        </Text>
      </CardHeader>

      <Flex
        alignItems="center"
        gap="20"
        mt="16"
        justifyContent="center"
        w="full"
      >
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={data as any[]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              cornerRadius={18}
              paddingAngle={6}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ pointerEvents: "auto" }}
            />
          </PieChart>
        </ResponsiveContainer>

        <Flex flexDirection="column" gap="8" w="full">
          {data.map((item) => (
            <Flex
              key={item.name}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              w="full"
            >
              <Flex flexDirection="row" gap="8" alignItems="center">
                <Circle
                  size={12}
                  stroke="transparent"
                  style={{ fill: item.color }}
                />
                <Text>{item.name}</Text>
              </Flex>
              <Text fontWeight="600" color="fg.avatar.neutral">
                {formatCurrency(item.value)}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};
