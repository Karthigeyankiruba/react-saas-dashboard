import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Badge,
  Breadcrumb,
  SidebarToggle,
} from "@optiaxiom/react";
import {
  Sun,
  Bell,
  SearchIcon,
  PanelRight,
  History,
  Star,
  PanelLeft,
} from "lucide-react";

export const Header: React.FC = () => {
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
          <PanelLeft size={20} color="black" />

          <Star size={20} color="black" />

          <Breadcrumb
            items={[
              { href: "/", label: "Dashboard" },
              { href: "/default", label: "Default" },
            ]}
          />
        </Flex>

        {/* Right Actions */}
        <Flex flexDirection="row" alignItems="center" gap="12">
          <Input
            addonBefore={<SearchIcon size={16} />}
            placeholder="Search"
            size="lg"
            style={{ width: "300px" }}
          />
          {/* Theme Toggle */}
          <Button appearance="subtle">
            <Sun size={20} color="black" />
          </Button>

          {/* Notifications */}
          <Button appearance="subtle">
            <Box>
              <Bell size={20} color="black" />
              <Badge intent="danger">3</Badge>
            </Box>
          </Button>

          {/* Settings */}
          <Button appearance="subtle">
            <History size={20} color="black" />
          </Button>

          {/* Settings */}
          <Button appearance="subtle">
            <PanelRight size={20} color="black" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
