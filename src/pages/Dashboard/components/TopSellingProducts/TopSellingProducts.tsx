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

const data = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.5",
    quantity: 37,
    amount: "$4754.5",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.0",
    quantity: 184,
    amount: "$3680.0",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1965.81",
  },
];

export const TopSellingProducts: React.FC = () => {
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
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Quantity</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
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
