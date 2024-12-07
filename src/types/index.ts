import { Industry } from '../constants';

export interface CustomerProject {
  id: string;
  name: string;
  contact: string;
  start_date: string;
  end_date: string;
}

export interface Customer {
  id: string;
  isActive: boolean;
  company: string;
  industry: Industry;
  projects: CustomerProject[];
  about: string;
}
