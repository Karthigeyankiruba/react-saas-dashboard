import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AxiomProvider } from "@optiaxiom/react";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AxiomProvider>
      <App />
    </AxiomProvider>
  </StrictMode>
);
