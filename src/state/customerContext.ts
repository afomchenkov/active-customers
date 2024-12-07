import { createContext, useContext } from "react";
import { Customer } from "../types";

export type CustomerState = {
  customers: Customer[];
  isLoading: boolean;
  error: string | null;
}

export const defaultCustomerState = {
  customers: [],
  isLoading: false,
  error: null,
};

export const CustomerContext = createContext<CustomerState>(defaultCustomerState);

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
