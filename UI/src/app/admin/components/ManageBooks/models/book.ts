export interface IBook
{
    id:number,
    name:string ,
    status:boolean,
    category:{
        id:number,
        name:string
    }
}