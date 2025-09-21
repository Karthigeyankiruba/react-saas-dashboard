import { Grid } from "@optiaxiom/react";
import { MetricCard } from "../../../../components/MetricCard";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getMetrics } from "../../../../data/dataService";

const MetricsGrid = () => {
  const navigate = useNavigate();
  const metricsData = getMetrics();

  return (
    <Grid gridTemplateColumns={{ base: "1", md: "2" }} gap="24">
      {metricsData.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          description={metric.description}
          icon={
            metric.trend === "up" ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )
          }
          color={metric.color as "#E2F4FE" | "var(--bg-card)"}
          onClick={
            metric.clickable && metric.route
              ? () => navigate(metric.route as string)
              : undefined
          }
          cursor={metric.clickable && metric.route ? "pointer" : "default"}
        />
      ))}
    </Grid>
  );
};

export default MetricsGrid;
