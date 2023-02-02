import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import { CategoryItems } from "../../../../shared/models/categoryItems";
import { StatusItems } from "../../../../shared/models/Status";
import { Books } from "../../../../shared/repositories/bookReposirory";
import { IDropDownList } from "../../../../shared/utils/IDropDownList";
interface IEditBookProps {}
const EditBook: React.FunctionComponent<IEditBookProps> = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<boolean>();
  const [categoryId, setCategoryId] = useState<number>();
  const histori = useHistory();

  useEffect(() => {
    const selectedBook = Books.find((b) => b.id.toString() === id);
    setName(selectedBook?.name);
    setStatus(selectedBook?.status);
    setCategoryId(selectedBook?.category.id);
  }, []);

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleStatusChange = () => {
    setStatus(!status);
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: number;
    }>
  ) => {
    setCategoryId(e.target.value);
  };
  const handleSubmit = () => {
    console.log("submit book");
  };

  const handleReturn = () => {
    console.log("return");
    histori.push("/managebook");
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Edit book
        </h3>
        <div className="border mt-4 py-5 ">
          <div className="row px-4">
            <div className="col-md-5">
              <LInput
                handleChange={(e) => handleNameChange(e.target.value)}
                value={name}
                caption="Name:"
              ></LInput>
            </div>
            <div className="col-md-1 pt-2 px-5">
              <h6>Status:</h6>
            </div>
            <div className="col-md-2 px-4">
              <LDropdown
                handleChange={handleStatusChange}
                items={StatusItems}
                label="Status"
                value={status ? 1 : 0}
              ></LDropdown>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-md-1 mt-5 pt-2">
              <h6>Category:</h6>
            </div>
            <div className="col-md-2 mx-2 mt-5">
              <LDropdown
                handleChange={(e) => handleCategoryChange(e)}
                items={CategoryItems}
                label="category"
                value={categoryId ?? 0}
              ></LDropdown>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 d-flex justify-content-end">
              <LButton
                label="Back"
                color="inherit"
                onClick={handleReturn}
              ></LButton>
            </div>
            <div className="col-md-2">
              <LButton
                label="Save"
                color="inherit"
                onClick={handleSubmit}
              ></LButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditBook;
