import { Card, CardHeader, Flex, Separator, Text } from "@optiaxiom/react";
import * as styles from "./RevenueCard.css";
import { Circle } from "lucide-react";
import { RevenueChart } from "../RevenueChart";

const RevenueCard = () => {
  return (
    <Card className={styles.revenueCard}>
      <CardHeader>
        <Flex flexDirection="row" gap="20" alignItems="center">
          <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
            Revenue
          </Text>

          <Separator orientation="vertical" />

          <Flex flexDirection="row" gap="4" alignItems="center">
            <Circle size={16} fill="black" stroke="transparent" />

            <Text>Current Week</Text>

            <Text fontWeight="600">$58,211</Text>
          </Flex>

          <Flex flexDirection="row" gap="8" alignItems="center">
            <Circle size={16} fill="lightblue" stroke="transparent" />

            <Text>Previous Week</Text>

            <Text fontWeight="600">$68,768</Text>
          </Flex>
        </Flex>
      </CardHeader>

      <RevenueChart />
    </Card>
  );
};

export default RevenueCard;
