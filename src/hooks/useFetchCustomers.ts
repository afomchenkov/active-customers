import { useCallback, useState, useEffect } from "react";
import { Customer } from "../types";
import { CUSTOMERS_URL } from "../constants";

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

  const getCustomers = useCallback(async () => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCustomers();

    return () => {
      // controller.abort();
    };
  }, [getCustomers]);

  return [customers, isLoading, error, controller];
};
