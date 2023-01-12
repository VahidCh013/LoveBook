import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import { CategoryItems } from "../../../../shared/models/categoryItems";
import { StatusItems } from "../../../../shared/models/Status";

interface IAddBookProps {}
const AddBook: React.FunctionComponent<IAddBookProps> = () => {
  const history = useHistory();

  const [name,setName] = useState<string>();
  const [status,setStatus] = useState();
  const [categoryId,setCategoryId] = useState();
  const [size,setSize] = useState();
  const [Page,setPage] = useState();
  

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleStatusChange = () => {};
  const handleCategoryChange = () => {};
  const handleSizeChange = () => {};
  const handleReturn = () => {
    history.push("/managebook");
  };
  const handleSubmit = () => {};
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Add book
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-6">
              <LInput handleChange={(e) => handleNameChange(e.target.value)} 
              caption="Name:"></LInput>
            </div>
            <div className="col-md-1 pt-2">
              <h5>Status:</h5>
            </div>
            <div className="col-md-2">
              <LDropdown
                handleChange={handleStatusChange}
                items={StatusItems}
                label="status"
              ></LDropdown>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-md-1 mt-5 pt-2">
              <h5>Category:</h5>
            </div>
            <div className="col-md-2 mx-2 mt-5">
              <LDropdown
                handleChange={handleCategoryChange}
                items={CategoryItems}
                label="category"
              ></LDropdown>
            </div>
          </div>
          <div className="row px-4 mt-5">
            <h4 className="mt-6">Specifications</h4>
          </div>
          <div className="row mx-4">
            <div className="border px-4 mt-3">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="col-md-8">
                    <LInput
                      handleChange={handleSizeChange}
                      caption="size:"
                    ></LInput>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-md-8">
                    <LInput
                      handleChange={handleSizeChange}
                      caption="Page:"
                    ></LInput>
                  </div>
                </div>
              </div>
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
            <div className="col-md-2 d-flex justify-content-start">
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
export default AddBook;
