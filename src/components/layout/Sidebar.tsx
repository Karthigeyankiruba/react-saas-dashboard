import React, { useState } from "react";
import {
  Sidebar,
  Nav,
  NavBody,
  NavItem,
  NavList,
  Text,
  Heading,
  Flex,
  Avatar,
  NavGroup,
  NavGroupTrigger,
  NavGroupContent,
  SidebarToggle,
} from "@optiaxiom/react";
import {
  FolderOpen,
  Users,
  BookOpen,
  Circle,
  ChartPie,
  ShoppingBag,
  SquareUser,
  IdCard,
  PanelLeft,
  MessagesSquare,
  PanelRight,
} from "lucide-react";
import * as styles from "../../styles/layout/Sidebar.css";

export const AppSidebar: React.FC = () => {
  const [selected, setSelected] = useState("default");

  return (
    <Sidebar defaultExpanded className={styles.sidebar.container} data-sidebar>
      <Nav px="20" className={styles.sidebar.nav}>
        {/* Header */}
        <Flex flexDirection="row" gap="12" alignItems="center">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            size="lg"
          />
          <Heading level="3">ByeWind</Heading>
        </Flex>

        <NavBody gap="16">
          {/* Favorites & Recently */}
          <Flex flexDirection="row" gap="16">
            <Text color="fg.secondary" fontSize="lg">
              Favorites
            </Text>
            <Text color="fg.disabled" fontSize="lg">
              Recently
            </Text>
          </Flex>

          <NavList>
            <NavItem
              icon={<Circle fill="#666666" stroke="transparent" />}
              active={selected === "overview"}
              onClick={() => setSelected("overview")}
              className={
                selected === "overview"
                  ? styles.sidebar.navItemActive
                  : styles.sidebar.navItem
              }
            >
              Overview
            </NavItem>
            <NavItem
              icon={<Circle fill="#666666" stroke="transparent" />}
              active={selected === "projects"}
              onClick={() => setSelected("projects")}
              className={
                selected === "projects"
                  ? styles.sidebar.navItemActive
                  : styles.sidebar.navItem
              }
            >
              Projects
            </NavItem>
          </NavList>

          {/* Dashboards */}
          <div>
            <Text size="sm" color="fg.secondary">
              Dashboards
            </Text>
            <NavList gap="4">
              <NavItem
                icon={<ChartPie />}
                active={selected === "default"}
                onClick={() => setSelected("default")}
                className={
                  selected === "default"
                    ? styles.sidebar.navItemActive
                    : styles.sidebar.navItem
                }
              >
                Default
              </NavItem>
              <NavItem
                icon={<ShoppingBag />}
                active={selected === "ecommerce-dashboard"}
                onClick={() => setSelected("ecommerce-dashboard")}
                className={
                  selected === "ecommerce-dashboard"
                    ? styles.sidebar.navItemActive
                    : styles.sidebar.navItem
                }
              >
                eCommerce
              </NavItem>
              <NavItem
                icon={<FolderOpen />}
                active={selected === "projects-dashboard"}
                onClick={() => setSelected("projects-dashboard")}
                className={
                  selected === "projects-dashboard"
                    ? styles.sidebar.navItemActive
                    : styles.sidebar.navItem
                }
              >
                Projects
              </NavItem>
              <NavItem
                icon={<BookOpen />}
                active={selected === "online-courses"}
                onClick={() => setSelected("online-courses")}
                className={
                  selected === "online-courses"
                    ? styles.sidebar.navItemActive
                    : styles.sidebar.navItem
                }
              >
                Online Courses
              </NavItem>
            </NavList>
          </div>

          {/* Pages */}
          <NavList gap="4">
            <Text size="sm" color="fg.secondary">
              Pages
            </Text>
            <NavGroup collapsible>
              <NavGroupTrigger
                chevronPosition="start"
                className={styles.sidebarGroupTriggerStyleContext}
              >
                <Flex flexDirection="row" alignItems="center" gap="4">
                  <SquareUser size={16} />
                  User Profile
                </Flex>
              </NavGroupTrigger>
              <NavGroupContent pl="24">
                <NavItem
                  active={selected === "overview-page"}
                  onClick={() => setSelected("overview-page")}
                >
                  Overview
                </NavItem>
                <NavItem
                  active={selected === "campaigns"}
                  onClick={() => setSelected("campaigns")}
                >
                  Campaigns
                </NavItem>
                <NavItem
                  active={selected === "documents"}
                  onClick={() => setSelected("documents")}
                >
                  Documents
                </NavItem>
                <NavItem
                  active={selected === "followers"}
                  onClick={() => setSelected("followers")}
                >
                  Followers
                </NavItem>
              </NavGroupContent>
            </NavGroup>
          </NavList>

          {/* Account */}
          <NavList gap="4">
            <NavGroup collapsible defaultOpen={false}>
              <NavGroupTrigger
                chevronPosition="start"
                className={styles.sidebarGroupTriggerStyleContext}
              >
                <Flex flexDirection="row" alignItems="center" gap="4">
                  <IdCard size={16} />
                  Account
                </Flex>
              </NavGroupTrigger>
              <NavGroupContent pl="24">
                <NavItem
                  active={selected === "account"}
                  onClick={() => setSelected("account")}
                >
                  Account
                </NavItem>
              </NavGroupContent>
            </NavGroup>
          </NavList>

          <NavList gap="4">
            <NavGroup collapsible defaultOpen={false}>
              <NavGroupTrigger
                chevronPosition="start"
                className={styles.sidebarGroupTriggerStyleContext}
              >
                <Flex flexDirection="row" alignItems="center" gap="4">
                  <Users size={16} />
                  Corporate
                </Flex>
              </NavGroupTrigger>
              <NavGroupContent pl="24">
                <NavItem
                  active={selected === "corporate"}
                  onClick={() => setSelected("corporate")}
                >
                  Corporate
                </NavItem>
              </NavGroupContent>
            </NavGroup>
          </NavList>

          <NavList gap="4">
            <NavGroup collapsible defaultOpen={false}>
              <NavGroupTrigger
                chevronPosition="start"
                className={styles.sidebarGroupTriggerStyleContext}
              >
                <Flex flexDirection="row" alignItems="center" gap="4">
                  <PanelLeft size={16} />
                  Blog
                </Flex>
              </NavGroupTrigger>
              <NavGroupContent pl="24">
                <NavItem
                  icon={<BookOpen size={16} />}
                  active={selected === "blog"}
                  onClick={() => setSelected("blog")}
                >
                  Blog
                </NavItem>
              </NavGroupContent>
            </NavGroup>
          </NavList>

          <NavList gap="4">
            <NavGroup collapsible defaultOpen={false}>
              <NavGroupTrigger
                chevronPosition="start"
                className={styles.sidebarGroupTriggerStyleContext}
              >
                <Flex flexDirection="row" alignItems="center" gap="4">
                  <MessagesSquare size={16} />
                  Social
                </Flex>
              </NavGroupTrigger>
              <NavGroupContent pl="24">
                <NavItem
                  icon={<BookOpen size={16} />}
                  active={selected === "social"}
                  onClick={() => setSelected("social")}
                >
                  Social
                </NavItem>
              </NavGroupContent>
            </NavGroup>
          </NavList>

          <SidebarToggle icon={<PanelRight />} />
        </NavBody>
      </Nav>
    </Sidebar>
  );
};
