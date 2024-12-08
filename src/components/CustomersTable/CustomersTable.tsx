import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { CustomersTableRow } from "./CustomersTableRow";

// import { Loader } from "../Loader";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import { Customer } from "../../types";

// interface Column {
//   id: "company" | "state" | "industry" | "projects" | "actions";
//   label: string;
//   minWidth?: number;
//   align?: "right";
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: "company", label: "Company", minWidth: 170 },
//   { id: "state", label: "State", minWidth: 100 },
//   {
//     id: "industry",
//     label: "Industry",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "projects",
//     label: "Number of projects",
//     minWidth: 170,
//     align: "right",
//   },
// ];

export const CustomersTable = ({ customers, toolbar }: { customers: Customer[], toolbar: any }) => {
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
              <TableCell />
              <TableCell>Company</TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Industry</TableCell>
              <TableCell align="center">Projects number</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => {
                return <CustomersTableRow key={customer.id} row={customer} />;
              })}
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
