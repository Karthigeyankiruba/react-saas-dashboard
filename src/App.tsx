import { Box } from "./ui/react/src/box/Box";
import { Button } from "./ui/react/src/button/Button";
import { Card, CardHeader } from "./ui/react/src/card";
import { Heading } from "./ui/react/src/heading/Heading";
import { Text } from "./ui/react/src/text/Text";
import { Badge } from "./ui/react/src/badge/Badge";

function App() {
  return (
    <div style={{ padding: "24px" }}>
      <Heading size="2xl">React SaaS Dashboard</Heading>

      <Text size="lg">
        Welcome to your dashboard powered by Optiaxiom UI components
      </Text>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          margin: "24px 0",
        }}
      >
        <Card>
          <CardHeader>
            <Heading size="lg">Analytics</Heading>
          </CardHeader>
          <div style={{ padding: "16px" }}>
            <Text>View your key metrics and performance data</Text>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <Badge color="success">+12%</Badge>
              <Badge color="info">Active</Badge>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="lg">Users</Heading>
          </CardHeader>
          <div style={{ padding: "16px" }}>
            <Text>Manage your user accounts and permissions</Text>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <Badge color="warning">Pending</Badge>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="lg">Settings</Heading>
          </CardHeader>
          <div style={{ padding: "16px" }}>
            <Text>Configure your application preferences</Text>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <Badge color="neutral">Default</Badge>
            </div>
          </div>
        </Card>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Button color="primary" size="md">
          Primary Action
        </Button>
        <Button color="secondary" size="md">
          Secondary Action
        </Button>
        <Button color="neutral" size="md">
          Neutral Action
        </Button>
      </div>
    </div>
  );
}

export default App;
