import {
  ReactNode,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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

  // change CRUD functions to API requests

  const addNewCustomer = (newCustomerData: Customer) => {
    setCustomers((customers) => {
      customers.unshift(newCustomerData);
      return [...customers];
    });
  };

  const editCustomer = useCallback(
    (updatedCustomer: Customer) => {
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
    },
    [customers]
  );

  const deleteCustomer = useCallback(
    (id: string) => {
      const customerIdx = customers.findIndex((customer) => customer.id === id);

      if (customerIdx >= 0) {
        setCustomers((customers) => {
          customers.splice(customerIdx, 1);
          return [...customers];
        });

        return true;
      }

      return false;
    },
    [customers]
  );

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
  }, [customers, isLoading, error, deleteCustomer, editCustomer]);

  return (
    <CustomersContext.Provider value={customersState}>
      {children}
    </CustomersContext.Provider>
  );
};
