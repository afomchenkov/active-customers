import { ReactNode, ReactElement, useMemo } from "react";
import { CustomerContext } from "./customerContext";
import { useFetchCustomers } from "../hooks/useFetchCustomers";

export type CustomerProviderType = (params: { children: ReactNode }) => ReactElement;

export const CustomerProvider: CustomerProviderType = ({ children }) => {
  const [customers, isLoading, error] = useFetchCustomers();

  // const update = () => {}
  // const edit = () => {}
  // const delete = () => {}

  const state = useMemo(() => {
    return {
      customers,
      isLoading,
      error,
    };
  }, [customers, isLoading, error]);

  return <CustomerContext.Provider value={state}>{children}</CustomerContext.Provider>;
};
