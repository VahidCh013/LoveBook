import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import LPopUp from "../../../../shared/components/LPopUp";
import { StatusItems } from "../../../../shared/models/Status";
import { ISpec } from "../../../../shared/utils/iSpec";
interface IAddCategoryProps {}
const AddCategory: React.FunctionComponent<IAddCategoryProps> = () => {
  const [specValue, setSpecValue] = useState("");
  const [specs, setSpecs] = useState<ISpec[]>([]);
  const [showAddSpecPopUp, setShowAddSpecPopUp] = useState(false);
  const [name, setName] = useState("");
  const handleReturn = () => {};
  const handleSubmit = () => {
     
    let category = {
      name: name,
      specs: specs,
      isActive:
    };
    console.log(category);
  };
  const handelNameChange = (value: string) => {
    setName(value);
  };
  const handleStatusChange = () => {};
  const handleSpecValueChange = (id: number, value: string) => {
    let updatedSpecs = specs.map((s) => {
      if (s.id === id) {
        s.value = value;
      }
      return s;
    });
    setSpecs(updatedSpecs);
  };
  const handleAdd = () => {
    setShowAddSpecPopUp(true);
  };
  const edit = () => {};
  const remove = () => {};
  const onCancel = () => {
    setShowAddSpecPopUp(false);
  };
  const onConfirm = () => {
    const spec: ISpec = {
      id: specs.length + 1,
      value: specValue,
    };
    let currentSpecs = specs;
    currentSpecs.push(spec);
    setSpecs(currentSpecs);
    setShowAddSpecPopUp(false);
  };

  const changeSpecValue = (value: string) => {
    setSpecValue(value);
  };

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
          <LInput
            handleChange={(e) => changeSpecValue(e.target.value)}
          ></LInput>
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
              <LInput
                handleChange={(e) => handelNameChange(e.target.value)}
                caption="Name:"
              ></LInput>
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
                  {specs.length === 0 ? (
                    <>Empty</>
                  ) : (
                    specs.map((s) => {
                      return (
                        <>
                          <div className="col-md-6">
                            <div className="col-md-8">
                              <LInput
                                defaultValue={s.value}
                                handleChange={(e) =>
                                  handleSpecValueChange(s.id, e.target.value)
                                }
                              ></LInput>
                            </div>
                          </div>
                          <div className="col-md-4 d-flex justify-content-end">
                            <IconButton
                              aria-label="delete"
                              onClick={() => remove()}
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </IconButton>
                          </div>
                        </>
                      );
                    })
                  )}
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
      {showAddSpecPopUp && (
        <LPopUp
          headerNode={headerAdd}
          children={bodyAdd}
          footerNode={footerAdd}
          show={showAddSpecPopUp}
        ></LPopUp>
      )}
    </>
  );
};
export default AddCategory;
