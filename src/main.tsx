import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AxiomProvider } from "@optiaxiom/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AxiomProvider>
        <App />
      </AxiomProvider>
    </BrowserRouter>
  </StrictMode>
);
