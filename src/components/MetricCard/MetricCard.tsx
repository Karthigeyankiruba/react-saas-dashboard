import { Card, CardHeader, Flex, Text } from "@optiaxiom/react";
import React from "react";
import * as styles from "./MetricCard.css";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: "#E2F4FE" | "#F8F9FB";
  onClick?: () => void;
}

// #E2F4FE

const MetricCard = ({
  title,
  value,
  description,
  icon,
  color,
  onClick,
}: MetricCardProps) => {
  return (
    <Card className={styles.metricCard} onClick={onClick}>
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
