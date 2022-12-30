import { useEffect, useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import LTable from "../../../../shared/components/LTable";
import { IColumn } from "../../../../shared/models/IColumn";
import { Routes } from "../../../../shared/routes/routes";
import { IBook } from "./models/book";

interface IManageBook {}

const ManageBook: React.FunctionComponent<IManageBook> = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [bookColumns, setBookColumns] = useState<IColumn[]>([]);

  useEffect(() => {
    setBookColumns([{ name: "Name" }, { name: "Status" }]);

    setBooks([
      { id:1, name: "book A", status: true },
      { id:2, name: "book B", status: false },
    ]);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Manage book
        </h3>
        <div className="addbook-btn d-flex justify-content-end p-4">
          <Link to={Routes.AddBook}>Add book +</Link>
        </div>
        <div className="container">
          <LTable
            columns={bookColumns}
            data={books}
            includeTools={true}
          ></LTable>
        </div>
      </div>
    </>
  );
};
export default ManageBook;
