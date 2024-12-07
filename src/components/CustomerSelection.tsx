import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useCustomerContext } from "../state/customerContext";
import { Loader } from './Loader';
import { CustomersTable } from './CustomersTable/CustomersTable';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const MenuButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Add new Customer</Button>
    </Stack>
  );
}

export const CustomerSelection = () => {
  const { customers, isLoading, error } = useCustomerContext();

  if (error) {
    return <h3>Error</h3>;
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <MenuButtons />
        {isLoading ? <Loader/> : <CustomersTable customers={customers}/>}
      </Container>
    </Fragment>
  );
};
