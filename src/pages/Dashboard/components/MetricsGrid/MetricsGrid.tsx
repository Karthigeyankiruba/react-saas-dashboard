import { Grid } from "@optiaxiom/react";
import { MetricCard } from "../../../../components/MetricCard";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetricsGrid = () => {
  const navigate = useNavigate();
  return (
    <Grid gridTemplateColumns={{ base: "1", md: "2" }} gap="24">
      <MetricCard
        title="Customers"
        value="3,781"
        description="+11.01%"
        icon={<TrendingUp size={14} />}
        color="#E2F4FE"
      />

      <MetricCard
        title="Orders"
        value="1,219"
        description="-0.03%"
        icon={<TrendingDown size={14} />}
        color="var(--bg-card)"
        onClick={() => navigate("/order-list")}
      />

      <MetricCard
        title="Revenue"
        value="$695"
        description="+15.03%"
        icon={<TrendingUp size={14} />}
        color="var(--bg-card)"
      />

      <MetricCard
        title="Growth"
        value="30.1%"
        description="+6.08%"
        icon={<TrendingUp size={14} />}
        color="#E2F4FE"
      />
    </Grid>
  );
};

export default MetricsGrid;
