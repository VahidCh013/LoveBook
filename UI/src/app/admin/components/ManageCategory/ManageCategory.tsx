import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LTable from "../../../../shared/components/LTable";
import { IColumn } from "../../../../shared/models/IColumn";
import { Categories } from "../../../../shared/repositories/categoryRepository";
import { Routes } from "../../../../shared/routes/routes";
import { ICategory } from "../ManageBooks/models/category";

interface IManageBookProps{}

const ManageCategory :React.FunctionComponent<IManageBookProps> = () => {
    const [categoryColumns,setCategoryColumns] = useState<IColumn[]>([]);
    const [categories,setCategories] = useState<ICategory[]>([]);
    const history =useHistory();

    useEffect(() => {
        setCategoryColumns([{ name: "Name"},{name: "Status"}]);
        setCategories(Categories);
    },[]);
    
    const onDelete=(id:number)=>{
        const updated = categories.filter((c)=>
            c.id !== id
        );
        setCategories(updated);
    };
    const onEdit=(id:number)=>{
        history.push({
            pathname:Routes.EditCategory,
            search: `?id=${id}`
        })
        console.log(id);
    };
    const onChangeStatus=(id:number)=>{
        const categoryUpdated= categories.map((c=>
            {
                if ( c.id===id)
                {
                    c.status=!c.status;
                    return c;
                }
                return c;
            }
           
        ));
        setCategories(categoryUpdated);
    };
    return(
       <>
         <div className="container-fluid">
                <h3 className="mt-4 font-weight-bold" style={{fontWeight: "bold"}}>
                    Manage category
                </h3>
                <div className="addbook-btn d-flex justify-content-end p-4">
                    <Link to={Routes.AddCategory}>Add Category +</Link>
                </div>
                <LTable
                    columns={categoryColumns}
                    data={categories}
                    handleDelete={onDelete}
                    handleEdit={onEdit}
                    includeTools={true}
                    handleChangeStatus={onChangeStatus}
                ></LTable>
            </div>
       </>
    );
}
export default ManageCategory;