import { FormEvent, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AddCustomerForm } from "./Forms";
import { AddCustomerModal } from "./Modals";
import { CustomersTable, TableToolbar } from "./CustomersTable";
import { Customer } from "../types";
import { TableOverlay } from "./TableOverlay";
import { useCustomersContext } from "../state/customersContext";

type AddCustomerModalButtonsProps = {
  onCancel: () => void;
};

const AddCustomerModalButtons = ({
  onCancel,
}: AddCustomerModalButtonsProps): React.JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary" type="submit">
        Add
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
  const shouldRenderOverlay = isLoading || error;

  const handleFilterInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setIndustryFilterValue(event.currentTarget.value);
    },
    []
  );

  const handleAddNewCustomerClick = useCallback(() => {
    setIsAddNewCustomerModalOpen(true);
  }, []);

  const handleAddNewCustomer = useCallback(
    (newCustomer: Omit<Customer, "id" | "projects">) => {
      addNewCustomer({
        id: uuid(),
        projects: [],
        ...newCustomer,
      });
      setIsAddNewCustomerModalOpen(false);
    },
    [addNewCustomer]
  );

  const byIndustry = (customer: Customer) => {
    if (industryFilterValue) {
      return customer.industry.includes(industryFilterValue);
    }
    return true;
  };

  return (
    <Container component="section" fixed>
      <AddCustomerModal
        title={"Add new customer"}
        body={
          <AddCustomerForm
            formActions={
              <AddCustomerModalButtons
                onCancel={() => setIsAddNewCustomerModalOpen(false)}
              />
            }
            onFormSubmit={handleAddNewCustomer}
          />
        }
        isModalOpen={isAddNewCustomerModalOpen}
        onModalClose={() => setIsAddNewCustomerModalOpen(false)}
      />
      {shouldRenderOverlay ? (
        <TableOverlay isLoading={isLoading} error={error} />
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
