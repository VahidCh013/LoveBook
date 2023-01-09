import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, NavLink, Route, useHistory } from "react-router-dom";
import LPopUp from "../../../../shared/components/LPopUp";
import LTable from "../../../../shared/components/LTable";
import { IColumn } from "../../../../shared/models/IColumn";
import { Books } from "../../../../shared/repositories/bookReposirory";
import { Routes } from "../../../../shared/routes/routes";
import { IBook } from "./models/book";

interface IManageBookProps {}

const ManageBook: React.FunctionComponent<IManageBookProps> = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [bookColumns, setBookColumns] = useState<IColumn[]>([]);
  const history = useHistory();

  useEffect(() => {
    setBookColumns([{ name: "Name" }, { name: "Status" }]);
    //get books from APi
    setBooks(Books);
  }, []);
  const onDelete = (id: number) => {
    const updated = books.filter((b) => b.id !== id);
    setBooks(updated);
    console.log(updated);
  };
  const onEdit = (id: number) => {
    history.push({
      pathname: Routes.EditBook,
      search: `?id=${id}`
    })
  };
  const onChangeStatus=(id:number)=>{
    const bookUpdated = books.map((b=>
      {
        if ( b.id === id)
        {
          b.status = !b.status;
          return b;
        }
        return b;
      }));
      setBooks(bookUpdated);
      console.log(bookUpdated)
  }

  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Manage book
        </h3>
        <div className="addbook-btn d-flex justify-content-end p-4">
          <Link to={Routes.AddBook}>Add book +</Link>
        </div>
          <LTable
            columns={bookColumns}
            data={books}
            includeTools={true}
            handleDelete={onDelete}
            handleEdit={onEdit}
            handleChangeStatus={onChangeStatus}
          ></LTable>
      </div>
    </>
  );
};
export default ManageBook;
