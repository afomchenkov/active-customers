import { ReactNode, useState } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { CustomersTableRow } from "./CustomersTableRow";
import { Customer } from "../../types";

type CustomersTableColumn = {
  id: "company" | "state" | "industry" | "projects" | "actions" | "toggler";
  label: string;
  width?: number | string;
  align?: "left" | "right" | "center" | "justify";
  format?: (value: number) => string;
  valueGetter?: (value: number, row: Customer) => string;
};

type CustomersTableProps = {
  customers: Customer[];
  toolbar: ReactNode;
};

const columns: readonly CustomersTableColumn[] = [
  { id: "toggler", label: "", width: '60px' },
  { id: "company", label: "Company", align: "left", width: '220px' },
  { id: "state", label: "State", align: "center", width: '100px' },
  {
    id: "industry",
    label: "Industry",
    width: '170px',
    align: "center",
  },
  {
    id: "projects",
    label: "Projects number",
    width: '100px',
    align: "center",
  },
  {
    id: "actions",
    label: "Actions",
    width: '3em',
    align: "center",
  },
];

export const CustomersTable = ({
  customers,
  toolbar,
}: CustomersTableProps): React.JSX.Element => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={2} sx={{ width: "100%", overflow: "hidden" }}>
      {toolbar}
      <TableContainer sx={{ height: 500 }}>
        <Table stickyHeader aria-label="customers table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                variant="head"
                  key={column.id}
                  align={column.align}
                  sx={{ width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => (
                <CustomersTableRow key={customer.id} row={customer} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
