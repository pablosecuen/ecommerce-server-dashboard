"use client";
import React from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { RenderCell } from "./render-cell";

interface TableColumnItem {
  name: string;
  uid: string;
}

interface TableWrapperProps {
  columns: TableColumnItem[];
  data: any[];
}

const TableWrapper: React.FC<TableWrapperProps> = ({ columns, data }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  {RenderCell({ user: item, columnKey: column.uid })}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableWrapper;
