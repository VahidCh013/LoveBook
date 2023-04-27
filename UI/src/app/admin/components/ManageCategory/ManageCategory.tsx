
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CategoryServises } from "../../../../services/categoryServices";
import LTable from "../../../../shared/components/LTable";
import { ShowCategory } from "../../../../shared/models/categoryDto";
import { IColumn } from "../../../../shared/models/IColumn";
import { Routes } from "../../../../shared/routes/routes";

interface IManageBookProps {}

const ManageCategory: React.FunctionComponent<IManageBookProps> = () => {
  const [categoryColumns, setCategoryColumns] = useState<IColumn[]>([]);
  const [categories, setCategories] = useState<ShowCategory[]>([]);
  const history = useHistory();

  useEffect(() => {
    setCategoryColumns([{ name: "Name" }, { name: "Status" }]);
    getCategory();
  }, []);

  const getCategory = async () => {
    await CategoryServises.getCategory().then((response) => {
      console.log(response);
      setCategories(response.data);
    });
  };

  const onDelete = async (id: number) => {
    await CategoryServises.deleteCategory(id).then((response) => {
      const updated = categories.filter((c) => c.id !== id);
      setCategories(updated);
      console.log("test");
    });
  };
  const onEdit = (id: number) => {
      history.push({
        pathname: Routes.EditCategory,
        search: `?id=${id}`,
    });
    console.log(id);
  };
  const onChangeStatus = (id: number) => {
    const categoryUpdated = categories.map((c) => {
      if (c.id === id) {
        c.isActive = !c.isActive;
        return c;
      }
      return c;
    });
    setCategories(categoryUpdated);
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
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
};
export default ManageCategory;
