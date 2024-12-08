import { Fragment, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CustomersTableProjects } from "./CustomersTableProjects";
import { DeleteCustomerModal } from "../Modals/DeleteCustomerModal";
import { EditCustomerForm } from "../Forms/EditCustomerForm";
import { EditCustomerModal } from "../Modals/EditCustomerModal";
import { useCustomersContext } from "../../state/customersContext";
import { capitalize } from "../../utils";
import { Customer } from "../../types";

const ActiveStateLabel = styled.span`
  color: #156c15;
  font-weight: 800;
`;

const InactiveStateLabel = styled.span`
  color: #e42d2d;
  font-weight: 800;
`;

type DeleteCustomerModalButtonsProps = {
  onCancel: () => void;
  onDelete: () => void;
};

const DeleteCustomerModalButtons = ({
  onCancel,
  onDelete,
}: DeleteCustomerModalButtonsProps): React.JSX.Element => {
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

type EditCustomerModalButtonsProps = {
  onCancel: () => void;
};

const EditCustomerModalButtons = ({
  onCancel,
}: EditCustomerModalButtonsProps): React.JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
    </Stack>
  );
};

type CustomersTableRowProps = {
  row: Customer;
};

export const CustomersTableRow = ({
  row,
}: CustomersTableRowProps): React.JSX.Element => {
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

  const handleCustomerEdit = (updatedCustomer: Customer) => {
    editCustomer(updatedCustomer);
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
            aria-label="expand company row"
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
            <ActiveStateLabel>Active</ActiveStateLabel>
          ) : (
            <InactiveStateLabel>Inactive</InactiveStateLabel>
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
