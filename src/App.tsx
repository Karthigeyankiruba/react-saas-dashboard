import React from "react";
import { AxiomProvider } from "@optiaxiom/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AxiomProvider>
        <AppRoutes />
      </AxiomProvider>
    </ThemeProvider>
  );
};

export default App;
