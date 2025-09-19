import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AxiomProvider } from "./ui/react/src/axiom-provider/AxiomProvider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AxiomProvider>
      <App />
    </AxiomProvider>
  </StrictMode>
);
