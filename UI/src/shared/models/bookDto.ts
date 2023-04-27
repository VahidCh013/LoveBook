export type CreateBook = {
  name: string;
  isActive: boolean;
  specValues: 
    {
      specId: number;
      value: string;
    }[]
  ;
  categoryId: number;
};

export type showBook = {
  id: number;
  name: string;
  isActive: boolean;
  categoryName: string;
};

export type SpecValue={
  specId: number;
  value: string;

}
