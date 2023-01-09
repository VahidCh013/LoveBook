import { IBook } from "../../app/admin/components/ManageBooks/models/book";

export const Books: IBook[] = [
  { id: 1, name: "book A", status: true, 
    category:{
    id:0,
    name:"Category A"
  }
 },
  { id: 2, name: "book B", status: false,  
    category:{
    id:1,
    name:"Category B"
  } },
];
