import { Card, CardHeader, Flex, Text } from "@optiaxiom/react";
import React from "react";
import * as styles from "./MetricCard.css";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: "#E2F4FE" | "var(--bg-card)";
  onClick?: () => void;
  cursor?: "pointer" | "default";
}

const MetricCard = ({
  title,
  value,
  description,
  icon,
  color,
  onClick,
  cursor,
}: MetricCardProps) => {
  return (
    <Card
      className={styles.metricCard}
      onClick={onClick}
      style={{ backgroundColor: color }}
      cursor={cursor}
    >
      <CardHeader>
        <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
          {title}
        </Text>
      </CardHeader>
      <Flex
        flexDirection="row"
        gap="4"
        alignItems="center"
        justifyContent="space-between"
        w="full"
      >
        <Text fontSize="2xl" fontWeight="700">
          {value}
        </Text>
        <Flex flexDirection="row" gap="4" alignItems="center">
          <Text fontSize="sm">{description}</Text>
          {icon && <>{icon}</>}
        </Flex>
      </Flex>
    </Card>
  );
};

export default MetricCard;
