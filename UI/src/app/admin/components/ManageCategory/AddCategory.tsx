import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import LPopUp from "../../../../shared/components/LPopUp";
import { CategoryItems } from "../../../../shared/models/categoryItems";
import { StatusItems } from "../../../../shared/models/Status";
interface IAddCategoryprops {}
const AddCategory: React.FunctionComponent<IAddCategoryprops> = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handelNameChange = () => {};
  const handleStatusChange = () => {};
  const handleSizeChange = () => {};
  const handleAdd = () => {
    setShowPopUp(true);
  };
  const edit = () => {};
  const remove = () => {};
  const onCancel = () => {
    setShowPopUp(false);
  };
  const onConfirm = () => {};

  const headerAdd = (
    <>
      <h5>Add Specification</h5>
    </>
  );
  const bodyAdd = (
    <>
      <div className="row">
        <div className="col-md-2 d-flex justify-content-end">
          <label className="">Name:</label>
        </div>
        <div className="col-md-10 d-flex justify-content-start">
        <input className=""></input>
        </div>
      </div>
    </>
  );
  const footerAdd = (
    <>
      <button className="btn" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn btn-success" onClick={onConfirm}>
        Add
      </button>
    </>
  );

  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Add category
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-6">
              <LInput handleChange={handelNameChange} caption="Name:"></LInput>
            </div>
            <div className="col-md-1">
              <h5>Staus:</h5>
            </div>
            <div className="col-md-2">
              <LDropdown
                handleChange={handleStatusChange}
                items={StatusItems}
                label="status"
              ></LDropdown>
            </div>
          </div>
          <div className="row px-4 mt-5">
            <div className="col-md-6 d-flex justify-content-start">
              <h4>Specifications</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className="btn btn-lg" onClick={handleAdd}>
                +
              </button>
            </div>
            <div className="row mx-1">
              <div className="border px-4 mt-3">
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="col-md-8">
                      <LInput
                        handleChange={handleSizeChange}
                        caption="Size:"
                      ></LInput>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <IconButton aria-label="Example" onClick={() => edit()}>
                      <i className="fa fa-pencil text-success fa-2xs"></i>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => remove()}>
                      <i className="fa fa-trash-o text-danger"></i>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LPopUp
        headerNode={headerAdd}
        children={bodyAdd}
        footerNode={footerAdd}
        show={showPopUp}
      ></LPopUp>
    </>
  );
};
export default AddCategory;
