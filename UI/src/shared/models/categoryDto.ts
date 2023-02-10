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

export type ISpecDto = {
  id: number;
  name: string;
  value?: string;
}

export type ShowCategoryInBook = {
  id: number;
  value: string;

}

export type IAddSpec = {
  id: number;
  value: string;
}
