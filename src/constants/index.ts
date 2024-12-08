import { capitalize } from "../utils";

export enum Industry {
  Insurance = "insurance",
  Travel = "travel",
  Tech = "tech",
  Marketing = "marketing",
  Finance = "finance",
}

export const industriesOptions = Object.values(Industry).map((industry) => ({
  label: capitalize(industry),
  value: industry,
}));

export const CUSTOMERS_URL =
  "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json";
