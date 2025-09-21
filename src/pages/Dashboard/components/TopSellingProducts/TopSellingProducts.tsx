import React from "react";
import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from "@optiaxiom/react";
import { topSellingProducts } from "./TopSellingProducts.css";
import { getTopSellingProducts } from "../../../../data/dataService";

export const TopSellingProducts: React.FC = () => {
  const data = getTopSellingProducts();

  return (
    <Card className={topSellingProducts.container}>
      <CardHeader>
        <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
          Top Selling Products
        </Text>
      </CardHeader>

      <Table className={topSellingProducts.table}>
        <TableHeader className={topSellingProducts.tableHeader}>
          <TableRow>
            <TableHeaderCell className={topSellingProducts.headerCell}>
              Name
            </TableHeaderCell>
            <TableHeaderCell className={topSellingProducts.headerCell}>
              Price
            </TableHeaderCell>
            <TableHeaderCell className={topSellingProducts.headerCell}>
              Quantity
            </TableHeaderCell>
            <TableHeaderCell className={topSellingProducts.headerCell}>
              Amount
            </TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
