import React from "react";
import { AxiomProvider, Heading } from "@optiaxiom/react";
import { DashboardLayout } from "./components/layout/DashboardLayout";

const App: React.FC = () => {
  return (
    <AxiomProvider>
      <DashboardLayout>
        <Heading level="4" color="fg.accent.strong">
          eCommerce
        </Heading>
      </DashboardLayout>
    </AxiomProvider>
  );
};

export default App;
