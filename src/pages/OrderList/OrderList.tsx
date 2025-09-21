import {
  Box,
  Flex,
  Text,
  Input,
  DataTable,
  DataTableBody,
  DataTableFooter,
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
import { getOrders } from "../../data/dataService";
import { useState } from "react";

const OrderList = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const data = getOrders();

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
    manualPagination: false,
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    globalFilterFn: (row, columnId, value) => {
      const search = String(value).toLowerCase();
      const item = row.original;

      // Search through all relevant fields with safe string conversion
      const searchableFields = [
        item.id || "",
        item.user?.name || "",
        item.project || "",
        item.address || "",
        item.date || "",
        item.status || "",
      ];

      return searchableFields.some((field) =>
        String(field).toLowerCase().includes(search)
      );
    },
    pageCount: Math.ceil(data.length / pagination.pageSize),
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
        <DataTableFooter
          showPageSizeOptions
          pageSizeOptions={[
            { label: "5", value: "5" },
            { label: "10", value: "10" },
            { label: "20", value: "20" },
            { label: "50", value: "50" },
          ]}
        />
      </DataTable>
    </Box>
  );
};

export default OrderList;
