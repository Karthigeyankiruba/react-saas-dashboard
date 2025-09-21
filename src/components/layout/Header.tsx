import React from "react";
import { Box, Flex, Input, Button, Badge, Breadcrumb } from "@optiaxiom/react";
import {
  Sun,
  Moon,
  Bell,
  SearchIcon,
  PanelRight,
  History,
  Star,
  PanelLeft,
} from "lucide-react";
import { useNotificationStore } from "../../stores/notificationStore";

export const Header: React.FC = () => {
  const { toggleNotificationSidebar } = useNotificationStore();
  return (
    <Flex w="full" flexDirection="row" px="24" py="24" borderB="1">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="full"
      >
        {/* Breadcrumb */}
        <Flex flexDirection="row" alignItems="center" w="full" gap="20">
          <PanelLeft size={20} />

          <Star size={20} />

          <Breadcrumb
            items={[
              { href: "/", label: "Dashboard" },
              { href: "/default", label: "Default" },
            ]}
            data-breadcrumb
          />
        </Flex>

        {/* Right Actions */}
        <Flex flexDirection="row" alignItems="center" gap="12">
          <Input
            addonBefore={<SearchIcon size={16} />}
            placeholder="Search"
            size="lg"
            style={{
              width: "300px",
              backgroundColor: "var(--bg-card)",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
            }}
          />

          {/* Theme Toggle */}
          <Button appearance="subtle">
            <Sun size={20} /> {/* TODO: Add theme toggle */}
          </Button>

          {/* Notifications */}
          <Button appearance="subtle" onClick={toggleNotificationSidebar}>
            <Bell size={20} />
          </Button>

          {/* Settings */}
          <Button appearance="subtle">
            <History size={20} />
          </Button>

          {/* Settings */}
          <Button appearance="subtle">
            <PanelRight size={20} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
