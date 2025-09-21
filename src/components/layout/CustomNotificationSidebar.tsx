import React from "react";
import { Box, Flex, Text, Avatar } from "@optiaxiom/react";
import {
  Bug,
  User,
  UserCheck,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
  Mail,
  Settings,
} from "lucide-react";
import { useNotificationStore } from "../../stores/notificationStore";
import { customNotificationSidebar } from "./CustomNotificationSidebar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { getNotifications } from "../../data/dataService";
import type { NotificationData } from "../../types/data";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Bug: Bug,
  User: User,
  UserCheck: UserCheck,
  DollarSign: DollarSign,
  ShoppingCart: ShoppingCart,
  AlertTriangle: AlertTriangle,
  Mail: Mail,
  Settings: Settings,
} as const;

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
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    name: "Andi Lane",
    action: "subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const contactsData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    name: "Natali Craig",
    status: "online",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cfce54f6?w=32&h=32&fit=crop&crop=face",
    name: "Drew Cano",
    status: "online",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    name: "Andi Lane",
    status: "online",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    name: "Orlando Diggs",
    status: "offline",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face",
    name: "Andi Lane",
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

const NotificationItem = ({
  notification,
}: {
  notification: NotificationData;
}) => {
  const IconComponent = iconMap[notification.icon as keyof typeof iconMap];

  return (
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
          {IconComponent && <IconComponent size={16} />}
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
};

const ActivityItem = ({ activity }: { activity: any }) => (
  <Flex flexDirection="row" gap="12" alignItems="start">
    <Avatar src={activity.avatar} />
    <Flex flexDirection="column" flex="1" gap="4">
      <Text fontWeight="600" color="fg.default">
        {activity.name}
      </Text>
      <Text color="fg.disabled">{activity.time}</Text>
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
  const { isOpen } = useNotificationStore();
  const notificationsData = getNotifications();

  if (!isOpen) return null;

  return (
    <Box className={customNotificationSidebar.sidebar} data-open={isOpen}>
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
