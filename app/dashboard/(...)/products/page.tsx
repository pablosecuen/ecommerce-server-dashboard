"use client";
import { PRODUCTS } from "@/app/api/db/db-fake";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { HouseIcon } from "../../components/icons/breadcrumb/house-icon";
import { UsersIcon } from "../../components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "../../components/icons/sidebar/settings-icon";
import { TrashIcon } from "../../components/icons/accounts/trash-icon";
import { DotsIcon } from "../../components/icons/accounts/dots-icon";
import { InfoIcon } from "../../components/icons/accounts/info-icon";
import { ExportIcon } from "../../components/icons/accounts/export-icon";
import TableWrapper from "../../components/table/table";
import { products } from "../../components/table/data";

const Products = () => {
  return (
    <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Productos</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los productos</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="buscar productos..."
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary" startContent={<ExportIcon />}>
            Exportar a CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper columns={products} data={PRODUCTS} />
      </div>
    </div>
  );
};

export default Products;
