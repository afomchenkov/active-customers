import { ReactNode, ReactElement, useEffect, useMemo, useState } from "react";
import { CustomersContext, defaultCustomersState } from "./customersContext";
import { useFetchCustomers } from "../hooks/useFetchCustomers";
import { Customer } from "../types";

export type CustomersProviderType = (params: {
  children: ReactNode;
}) => ReactElement;

export const CustomersProvider: CustomersProviderType = ({ children }) => {
  const [loadedCustomers, isLoading, error] = useFetchCustomers();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    if (loadedCustomers) {
      setCustomers(loadedCustomers);
    }
  }, [loadedCustomers, isLoading, error]);

  // change CRUD methods to API requests

  const addNewCustomer = (newCustomerData: Customer) => {
    setCustomers((customers) => {
      customers.unshift(newCustomerData);
      return [...customers];
    });
  };

  const editCustomer = (updatedCustomer: Customer) => {
    const customerIdx = customers.findIndex(
      (customer) => customer.id === updatedCustomer.id
    );

    if (customerIdx >= 0) {
      setCustomers((customers) => {
        customers[customerIdx] = updatedCustomer;
        return [...customers];
      });

      return true;
    }

    return false;
  };

  const deleteCustomer = (id: string) => {
    const customerIdx = customers.findIndex((customer) => customer.id === id);

    if (customerIdx >= 0) {
      setCustomers((customers) => {
        customers.splice(customerIdx, 1);
        return [...customers];
      });

      return true;
    }

    return false;
  };

  const customersState = useMemo(() => {
    return {
      ...defaultCustomersState,
      customers,
      isLoading,
      error,
      addNewCustomer,
      editCustomer,
      deleteCustomer,
    };
  }, [customers, isLoading, error]);

  return (
    <CustomersContext.Provider value={customersState}>
      {children}
    </CustomersContext.Provider>
  );
};
