import React from "react";
import { Box, Flex, Text, Avatar } from "@optiaxiom/react";
import { Bug, User, Rss } from "lucide-react";
import { useNotificationStore } from "../../stores/notificationStore";
import { customNotificationSidebar } from "./CustomNotificationSidebar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const notificationsData = [
  {
    id: 1,
    icon: <Bug size={16} />,
    title: "You have a bug that needs...",
    description: "A critical bug was reported in the payment gateway.",
    time: "Just now",
    unread: true,
    color: "#a8c5da",
  },
  {
    id: 2,
    icon: <User size={16} />,
    title: "New user registered",
    description: "John Doe just signed up for your service.",
    time: "59 minutes ago",
    unread: false,
    color: "#ececf6",
  },
  {
    id: 3,
    icon: <Bug size={16} />,
    title: "You have a bug that needs...",
    description: "Another critical bug was reported.",
    time: "12 hours ago",
    unread: true,
    color: "#a8c5da",
  },
  {
    id: 4,
    icon: <Rss size={16} />,
    title: "Andi Lane subscribed to you",
    description: "New subscriber notification",
    time: "Today, 11:59 AM",
    unread: false,
    color: "#ececf6",
  },
];

const activitiesData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    name: "You have a bug that needs...",
    action: "Fixed a critical bug in the payment system",
    time: "Just now",
    icon: <Bug size={16} />,
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cfce54f6?w=32&h=32&fit=crop&crop=face",
    name: "Released a new version",
    action: "Released a new version of the app",
    time: "minutes ago",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=32&h=32&fit=crop&crop=face",
    name: "Submitted a bug",
    action: "Submitted a bug report",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-e695c6edd65d?w=32&h=32&fit=crop&crop=face",
    name: "Modified A data in Page X",
    action: "Modified data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face",
    name: "Deleted a page in Project X",
    action: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contactsData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1529626465619-b3786711d7f3?w=32&h=32&fit=crop&crop=face",
    name: "Natali Craig",
    status: "online",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    name: "Drew Cano",
    status: "away",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cfce54f6?w=32&h=32&fit=crop&crop=face",
    name: "Orlando Diggs",
    status: "offline",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=32&h=32&fit=crop&crop=face",
    name: "Andi Lane",
    status: "online",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-e695c6edd65d?w=32&h=32&fit=crop&crop=face",
    name: "Kate Morrison",
    status: "online",
  },
  {
    id: 6,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face",
    name: "Koray Okumus",
    status: "offline",
  },
];

const NotificationItem = ({ notification }: { notification: any }) => (
  <Flex gap="12">
    <Flex flexDirection="row" gap="16" alignItems="start">
      <Box
        className={customNotificationSidebar.notificationIcon}
        style={{
          ...assignInlineVars({
            backgroundColor: notification.color,
          }),
        }}
      >
        {notification.icon}
      </Box>
      <Flex flexDirection="column" flex="1" gap="4">
        <Text fontWeight="600" color="fg.default">
          {notification.title}
        </Text>
        <Text color="fg.disabled">{notification.time}</Text>
      </Flex>
    </Flex>
  </Flex>
);

const ActivityItem = ({ activity }: { activity: any }) => (
  <Flex gap="12" alignItems="start">
    <Flex flexDirection="row" gap="16" alignItems="start">
      <Avatar src={activity.avatar} />
      <Flex flexDirection="column" flex="1" gap="4">
        <Text fontWeight="600" color="fg.default">
          {activity.name}
        </Text>
        <Text color="fg.disabled">{activity.time}</Text>
      </Flex>
    </Flex>
  </Flex>
);

const ContactItem = ({ contact }: { contact: any }) => (
  <Flex gap="12" alignItems="start">
    <Flex flexDirection="row" gap="16" alignItems="center">
      <Avatar src={contact.avatar} />
      <Text color="fg.default">{contact.name}</Text>
    </Flex>
  </Flex>
);

export const CustomNotificationSidebar: React.FC = () => {
  const { isNotificationSidebarOpen } = useNotificationStore();

  return (
    <Box
      className={customNotificationSidebar.sidebar}
      data-open={isNotificationSidebarOpen}
    >
      {/* Content */}
      <Flex gap="24" p="24">
        {/* Notifications Section */}
        <Flex gap="20">
          <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
            Notifications
          </Text>

          <Flex flexDirection="column" gap="12">
            {notificationsData.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </Flex>
        </Flex>

        {/* Activities Section */}
        <Flex gap="20">
          <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
            Activities
          </Text>
          <Flex flexDirection="column" gap="12">
            {activitiesData.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </Flex>
        </Flex>

        {/* Contacts Section */}
        <Flex gap="20">
          <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
            Contacts
          </Text>
          <Flex flexDirection="column" gap="12">
            {contactsData.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
