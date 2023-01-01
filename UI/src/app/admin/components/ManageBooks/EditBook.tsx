import React, { useEffect, useState } from "react";
import LInput from "../../../../shared/components/LInput";
import LInputLogin from "../../../../shared/components/LInput";
import { Books } from "../../../../shared/repositories/bookReposirory";
import { IBook } from "./models/book";
interface IEditBookProps {}
const EditBook: React.FunctionComponent<IEditBookProps> = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");
  const [book, setBook] = useState<IBook>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    const selectedBook = Books.find((b) => b.id.toString() === id);
    setBook(selectedBook);
  }, []);
  const onChange = (value: string) => {
    setName(value);
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Edit book
        </h3>
        <div className="border mt-4">
          <div className="row">
            <div className="mt-5 mx-3 col-md-6">
              <LInput
                handleChange={(e) => onChange(e.target.value)}
                defaultValue={book?.name}
                caption="Name:"
              ></LInput>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditBook;
