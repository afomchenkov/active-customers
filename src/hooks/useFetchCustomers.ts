import { useState, useEffect } from "react";
import { Customer } from "../types";

const CUSTOMERS_URL =
  "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json";

const waitAsync = async (msTime: number = 1500) =>
  new Promise((res) => setTimeout(res, msTime));

export type UseFetchCustomers = () => [
  Customer[],
  boolean,
  string | null,
  AbortController
];

export const useFetchCustomers: UseFetchCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const controller = new AbortController();

  const getCustomers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(CUSTOMERS_URL, {
        method: "GET",
        mode: "cors",
        signal: controller.signal,
      });

      const data = await response.json();

      await waitAsync();

      if (!data) {
        return;
      }

      setCustomers(data);
    } catch (error) {
      setError(JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();

    return () => {
      // controller.abort();
    };
  }, []);

  return [customers, isLoading, error, controller];
};
