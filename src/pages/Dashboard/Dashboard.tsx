import { Flex, Grid, Heading } from "@optiaxiom/react";
import { MetricsGrid } from "./components/MetricsGrid";
import { ProjectionsChart } from "./components/ProjectionsChart";
import { RevenueCard } from "./components/RevenueCard";
import { RevenueLocation } from "./components/RevenueLocation";
import { TopSellingProducts } from "./components/TopSellingProducts";
import { TotalSales } from "./components/TotalSales";

const Dashboard = () => {
  return (
    <Flex gap="24" overflow="auto">
      <Heading level="4" color="fg.accent.strong">
        eCommerce
      </Heading>

      <Grid gridTemplateColumns="2" gap="24">
        <MetricsGrid />
        <ProjectionsChart />
      </Grid>

      <Grid gap="24" w="full" style={{ gridTemplateColumns: "75% 25%" }}>
        <RevenueCard />
        <RevenueLocation />
      </Grid>
      <Grid gap="24" w="full" style={{ gridTemplateColumns: "75% 25%" }}>
        <TopSellingProducts />
        <TotalSales />
      </Grid>
    </Flex>
  );
};

export default Dashboard;
