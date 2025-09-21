import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  DataTable,
  DataTableBody,
  DataTableFooter,
  Pagination,
} from "@optiaxiom/react";
import { Plus, Filter, ArrowUpDown, Search } from "lucide-react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { orderList } from "./OrderList.css";
import { columns } from "./columns";
import { data } from "./data";
import { useState } from "react";

const OrderList = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, value) => {
      const search = value.toLowerCase();
      const item = row.original;

      return (
        item.id.toLowerCase().includes(search) ||
        item.user.name.toLowerCase().includes(search) ||
        item.project.toLowerCase().includes(search) ||
        item.address.toLowerCase().includes(search) ||
        item.date.toLowerCase().includes(search) ||
        item.status.toLowerCase().includes(search)
      );
    },
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
  });

  return (
    <Box className={orderList.container}>
      {/* Header */}
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="24"
      >
        <Text fontWeight="600" fontSize="xl">
          Order List
        </Text>
      </Flex>

      {/* Search Bar */}
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        px="16"
        py="12"
        rounded="xl"
        mb="24"
        style={{
          backgroundColor: "var(--bg-card)",
        }}
      >
        <Flex flexDirection="row" gap="12" alignItems="center">
          <Plus size={16} />
          <Filter size={16} />
          <ArrowUpDown size={16} />
        </Flex>

        <Box style={{ width: "300px" }}>
          <Input
            addonBefore={<Search size={16} />}
            placeholder="Search orders..."
            border="0"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
            }}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Box>
      </Flex>

      {/* Table */}
      <DataTable table={table} className={orderList.table}>
        <DataTableBody />
        <DataTableFooter showPageSizeOptions />
      </DataTable>
    </Box>
  );
};

export default OrderList;
