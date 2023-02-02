export type AddCategoryDto = {
  name: string;
  isActive: boolean;
  specs: string[];
};

export type ShowCategory = {
  id: number;
  name: string;
  isActive: boolean;
};

export type showCategoryById = {
  id: number;
  name: string;
  isActive: boolean;
  specs: {
    id: number;
    name: string;
  }[];
};

export interface ISpecDto {
  id: number;
  name: string;
}
