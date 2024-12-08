import { Industry } from '../constants';

export type CustomerProject = {
  id: string;
  name: string;
  contact: string;
  start_date: string;
  end_date: string;
}

export type Customer = {
  id: string;
  isActive: boolean;
  company: string;
  industry: Industry;
  projects: CustomerProject[];
  about: string;
}
