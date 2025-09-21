import React from "react";
import { AxiomProvider } from "@optiaxiom/react";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <AxiomProvider>
      <AppRoutes />
    </AxiomProvider>
  );
};

export default App;
