import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { TableToolbar } from "./CustomersTable/TableToolbar";
import { CustomersTable } from "./CustomersTable/CustomersTable";
import { useCustomersContext } from "../state/customersContext";
import { AddCustomerForm } from "./Forms/AddCustomerForm";
import { AddCustomerModal } from "./AddCustomerModal";
import { Loader } from './Loader';
import { Customer } from "../types";

const AddCustomerModalButtons = ({ onCancel }: any) => {
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

export const CustomersSelection = () => {
  const { customers, isLoading, error, addNewCustomer } = useCustomersContext();
  const [isAddNewCustomerModalOpen, setIsAddNewCustomerModalOpen] =
    useState(false);
  const [industryFilterValue, setIndustryFilterValue] = useState("");

  const handleFilterInputChange = useCallback((event: any) => {
    setIndustryFilterValue(event.target.value);
  }, []);

  const handleAddNewCustomerClick = useCallback(() => {
    setIsAddNewCustomerModalOpen(true);
  }, []);

  const handleAddNewCustomer = useCallback((newCustomer: any) => {
    addNewCustomer({
      id: uuid(),
      projects: [],
      ...newCustomer,
    });
    setIsAddNewCustomerModalOpen(false);
  }, []);

  const byIndustry = (customer: Customer) => {
    if (industryFilterValue) {
      return customer.industry.includes(industryFilterValue);
    }
    return true;
  };

  return (
    <Container component="section" fixed>
      <AddCustomerModal
        title={`Add new customer`}
        body={
          <AddCustomerForm
            onFormSubmit={handleAddNewCustomer}
            formActions={
              <AddCustomerModalButtons
                onCancel={() => setIsAddNewCustomerModalOpen(false)}
              />
            }
          />
        }
        isModalOpen={isAddNewCustomerModalOpen}
        onModalClose={() => setIsAddNewCustomerModalOpen(false)}
      />
      {isLoading ? (
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            height: 600,
            alignContent: "center",
          }}
        >
          <Loader />
        </Paper>
      ) : (
        <CustomersTable
          customers={customers.filter(byIndustry)}
          toolbar={
            <TableToolbar
              onAddNewCustomerClick={handleAddNewCustomerClick}
              onFilterInputChange={handleFilterInputChange}
              filterInputValue={industryFilterValue}
            />
          }
        />
      )}
    </Container>
  );
};
