import { Fragment, useEffect } from "react";
import Container from "@mui/material/Container";
import { TableToolbar } from "./CustomersTable/TableToolbar";
import { CustomersTable } from "./CustomersTable/CustomersTable";
import { useCustomersContext } from "../state/customersContext";

export const CustomersSelection = () => {
  const { customers, isLoading, error } = useCustomersContext();

  // handle state here
  // provide toolbar here

  const handleFilterClick = () => {
    console.log("handle filter");
  };

  const handleAddNewCustomerClick = () => {
    console.log("handle add new customer");
  };

  return (
    <Fragment>
      <Container component="section" fixed>
        <CustomersTable customers={customers} toolbar={
          <TableToolbar
            onFilterClick={handleFilterClick}
            onAddNewCustomer={handleAddNewCustomerClick}
          /> 
        }/>
      </Container>
    </Fragment>
  );
};
