import React from "react";
import { Box } from "@optiaxiom/react";

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box px="32" py="24" overflow="auto">
      {children}
    </Box>
  );
};
