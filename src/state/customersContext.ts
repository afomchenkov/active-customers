import { createContext, useContext } from "react";
import { Customer } from "../types";

const Noop = () => {};

// export type CreateCustomerFields = {}

export type CustomersState = {
  customers: Customer[];
  isLoading: boolean;
  error: string | null;
  addNewCustomer: (newCustomerData: Customer) => void;
  editCustomer: (customer: Customer) => boolean;
  deleteCustomer: (id: string) => boolean;
}

export const defaultCustomersState = {
  customers: [],
  isLoading: false,
  error: null,
  addNewCustomer: Noop,
  editCustomer: Noop as never,
  deleteCustomer: Noop as never,
};

export const CustomersContext = createContext<CustomersState>(defaultCustomersState);

export const useCustomersContext = () => {
  return useContext(CustomersContext);
};
