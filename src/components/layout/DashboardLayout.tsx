import React from "react";
import { Box, Flex } from "@optiaxiom/react";
import { AppSidebar } from "./Sidebar";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { dashboardLayout } from "../../styles/layout/DashboardLayout.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <Box className={dashboardLayout.container}>
      <AppSidebar />
      <Flex flexDirection="column" className={dashboardLayout.mainArea}>
        <Header />
        <MainContent>{children}</MainContent>
      </Flex>
    </Box>
  );
};
