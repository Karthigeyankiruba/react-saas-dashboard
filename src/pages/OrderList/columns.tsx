import { createColumnHelper } from "@tanstack/react-table";
import { Box, Flex, Text, Avatar, Checkbox } from "@optiaxiom/react";
import { Calendar } from "lucide-react";
import { badge } from "./OrderList.css";

type Order = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: string;
  statusColor: string;
};

const columnHelper = createColumnHelper<Order>();

const StatusBadge = ({ status, color }: { status: string; color: string }) => (
  <Flex flexDirection="row" alignItems="center" gap="8" className={badge}>
    <Box
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
    <Text color="fg.default">{status}</Text>
  </Flex>
);

export const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    size: 50,
  }),
  columnHelper.accessor("id", {
    header: "Order ID",
    cell: ({ renderValue }) => (
      <Text fontWeight="600" color="fg.default">
        #{renderValue()}
      </Text>
    ),
    size: 120,
  }),
  columnHelper.accessor("user", {
    header: "User",
    cell: ({ renderValue }) => {
      const user = renderValue();
      return (
        <Flex flexDirection="row" alignItems="center" gap="12">
          <Avatar src={user?.avatar} />
          <Text color="fg.default">{user?.name}</Text>
        </Flex>
      );
    },
    size: 200,
  }),
  columnHelper.accessor("project", {
    header: "Project",
    cell: ({ renderValue }) => <Text color="fg.default">{renderValue()}</Text>,
    size: 180,
  }),
  columnHelper.accessor("address", {
    header: "Address",
    cell: ({ renderValue }) => <Text color="fg.default">{renderValue()}</Text>,
    size: 200,
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: ({ renderValue }) => (
      <Flex flexDirection="row" alignItems="center" gap="8">
        <Calendar size={16} />
        <Text>{renderValue()}</Text>
      </Flex>
    ),
    size: 120,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge
        status={row.original.status}
        color={row.original.statusColor}
      />
    ),
    size: 120,
  }),
];
