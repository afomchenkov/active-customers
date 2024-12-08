import { Fragment, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CustomersTableProjects } from "./CustomersTableProjects";
import { DeleteCustomerModal } from "../Modals/DeleteCustomerModal";
import { useCustomersContext } from "../../state/customersContext";
import { capitalize } from "../../utils";
import { Customer } from "../../types";

import { EditCustomerForm } from "../Forms/EditCustomerForm";
import { EditCustomerModal } from "../Modals/EditCustomerModal";

const DeleteCustomerModalButtons = ({ onCancel, onDelete }: any) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color="error"
        onClick={onDelete}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
    </Stack>
  );
};

const EditCustomerModalButtons = ({ onCancel }: any) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
    </Stack>
  );
};

export const CustomersTableRow = (props: { row: Customer }) => {
  const { row } = props;
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { deleteCustomer, editCustomer } = useCustomersContext();

  const projectsCount = row.projects.length;

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCustomerDeleteConfirm = () => {
    deleteCustomer(row.id);
    setIsDeleteModalOpen(false);
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleCustomerEdit = (data: any) => {
    editCustomer(data);
    setIsEditModalOpen(false);
  };

  return (
    <Fragment>
      <EditCustomerModal
        title={`Edit customer: "${row.company}"`}
        body={
          <EditCustomerForm
            data={row}
            onFormSubmit={handleCustomerEdit}
            formActions={
              <EditCustomerModalButtons
                onCancel={() => setIsEditModalOpen(false)}
              />
            }
          />
        }
        isModalOpen={isEditModalOpen}
        onModalClose={() => setIsEditModalOpen(false)}
      />
      <DeleteCustomerModal
        title={`Are you sure you want to delete customer "${row.company}"`}
        actions={
          <DeleteCustomerModalButtons
            onCancel={() => setIsDeleteModalOpen(false)}
            onDelete={handleCustomerDeleteConfirm}
          />
        }
        isModalOpen={isDeleteModalOpen}
        onModalClose={() => setIsDeleteModalOpen(false)}
      />
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          >
            {isProjectsOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.company}
        </TableCell>
        <TableCell align="center">
          {row.isActive ? (
            <span>Active</span>
          ) : (
            <span style={{ color: "#e42d2d", fontWeight: 800 }}>Inactive</span>
          )}
        </TableCell>
        <TableCell align="center">{capitalize(row.industry)}</TableCell>
        <TableCell align="center">{projectsCount}</TableCell>
        <TableCell align="right">
          {
            <Box sx={{ "& button": { m: 1 } }}>
              {!row.isActive && (
                <IconButton
                  aria-label="delete"
                  size="small"
                  color="error"
                  onClick={handleDeleteModalOpen}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              )}
              <Button
                variant="contained"
                size="small"
                onClick={handleEditModalOpen}
              >
                Edit
              </Button>
            </Box>
          }
        </TableCell>
      </TableRow>
      <CustomersTableProjects row={row} open={isProjectsOpen} />
    </Fragment>
  );
};
