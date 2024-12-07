import { Fragment, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CustomersTableProducts } from "./CustomersTableProducts";

import { capitalize } from "../../utils";

import { Customer } from "../../types";

export const CustomersTableRow = (props: { row: Customer }) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const projectsCount = row.projects.length;

  const handleDeleteClick = () => {
    // opent confirmation modal
    console.log('delete customer ', row);
  }

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.company}
        </TableCell>
        <TableCell align="right">
          {row.isActive ? <span>Active</span> : <span style={{ color: '#e42d2d', fontWeight: 800 }}>Inactive</span>}
        </TableCell>
        <TableCell align="right">{capitalize(row.industry)}</TableCell>
        <TableCell align="right">{projectsCount}</TableCell>
        <TableCell align="right">
          {
            <Box sx={{ "& button": { m: 1 } }}>
              {!row.isActive && 
                <IconButton aria-label="delete" size="small" color="error" onClick={handleDeleteClick}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              }
              <Button variant="contained" size="small">
                Edit
              </Button>
            </Box>
          }
        </TableCell>
      </TableRow>
      <CustomersTableProducts row={row} open={open} />
    </Fragment>
  );
};
