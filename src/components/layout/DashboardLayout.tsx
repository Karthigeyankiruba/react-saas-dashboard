import React from "react";
import { Box, Flex } from "@optiaxiom/react";
import { AppSidebar } from "./Sidebar";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { CustomNotificationSidebar } from "./CustomNotificationSidebar";
import { dashboardLayout } from "../../styles/layout/DashboardLayout.css";
import { Outlet } from "react-router-dom";

export const DashboardLayout: React.FC = () => {
  return (
    <Box className={dashboardLayout.container}>
      <AppSidebar />
      <Flex flexDirection="column" className={dashboardLayout.mainArea}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </Flex>
      <CustomNotificationSidebar />
    </Box>
  );
};
