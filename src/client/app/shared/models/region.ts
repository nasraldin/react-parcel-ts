import { Country } from './country';

export interface Region {
  name: string;
  country: Country[];
  isActive: boolean;
  displayOrder: number;
}
