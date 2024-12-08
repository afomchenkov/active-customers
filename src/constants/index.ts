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
