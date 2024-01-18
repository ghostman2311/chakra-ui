import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./index.css";
const PaymentHistoryTable = () => {
  const defaultData = [
    {
      id: 4947,
      Billfor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      duedate: "10-13-2019",
      total: "$599.00",
      status: "Paid",
    },
    {
      id: 4947,
      Billfor: "Maintenance Year Subscription",
      issueDate: "10-05-2019",
      duedate: "10-13-2019",
      total: "$599.00",
      status: "Due",
    },
    {
      id: 4947,
      Billfor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      duedate: "10-13-2019",
      total: "$599.00",
      status: "Due",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: () => <span>#</span>,
    }),
    columnHelper.accessor((row) => row.Billfor, {
      id: "Billfor",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>BILL FOR</span>,
    }),
    columnHelper.accessor("issueDate", {
      header: () => "ISSUE DATE",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("duedate", {
      header: () => <span>DUE DATE</span>,
    }),
    columnHelper.accessor("total", {
      header: "TOTAL",
    }),
    columnHelper.accessor("status", {
      header: "STATUS ",
      cell: (info) => (
        <td
          key={info.column.id}
          className={
            info.column.id === "status" ? getStatusColorClass(info.value) : ""
          }
        >
          {info.renderValue()}
        </td>
      ),
    }),
  ];
  function getStatusColorClass(status) {
    switch (status?.toLowerCase()) {
      case "Due":
        return "status-due";
      case "paid":
        return "status-paid";
      default:
        return "";
    }
  }
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={cell.column.id === "id" ? "highlighted" : ""}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentHistoryTable;
