import React from "react";
import { Flex, Input, Breadcrumb } from "@optiaxiom/react";
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
import { useTheme } from "../../contexts/ThemeContext";

export const Header: React.FC = () => {
  const { toggleNotificationSidebar } = useNotificationStore();
  const { theme, toggleTheme } = useTheme();
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
        <Flex flexDirection="row" alignItems="center" gap="24">
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
          <div onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </div>

          {/* Notifications */}
          <div onClick={toggleNotificationSidebar} className="cursor-pointer">
            <Bell size={20} />
          </div>

          {/* Settings */}

          <History size={20} />

          {/* Settings */}

          <PanelRight size={20} />
        </Flex>
      </Flex>
    </Flex>
  );
};
