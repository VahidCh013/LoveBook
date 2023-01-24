export type AddCategoryDto = {
  name: string;
  isActive: boolean;
  specs: string[];
}

export type ShowCategory = {
    id:number;
    name: string;
    isActive: boolean;
} 
