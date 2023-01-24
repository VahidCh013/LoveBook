import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import LPopUp from "../../../../shared/components/LPopUp";
import { StatusItems } from "../../../../shared/models/Status";
import { ISpec } from "../../../../shared/utils/iSpec";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";
import { useHistory } from "react-router-dom";
import { AddCategoryDto } from "../../../../shared/models/categoryDto";
import { CategoryServises } from "../../../../services/categoryServices";
import { ADDCATEGORYVALIDATION } from "../../Validations/validation";
interface IAddCategoryProps {}
const AddCategory: React.FunctionComponent<IAddCategoryProps> = () => {
  const [category, setCategory] = useState<AddCategoryDto>({
    isActive: false,
    name: "",
    specs: [],
  });
  const [status, setStatus] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const [specs, setSpecs] = useState<ISpec[]>([]);
  const [showAddSpecPopUp, setShowAddSpecPopUp] = useState(false);
  const history = useHistory();

  const notify = () =>
    toast.success("User updated successfuly", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Ooops! Something went wrong", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleReturn = () => {
    history.push("/managecategory");
  };
  const handleSubmit = async () => {
    ADDCATEGORYVALIDATION.validate(category)
      .then(() => {
        if (category) {
          let addedCategory: AddCategoryDto = {
            name: category.name,
            isActive: category.isActive,
            specs: category.specs,
          };
          CategoryServises.createCategory(addedCategory)
            .then((response) => {
              notify();
              console.log(addedCategory);
            })
            .catch((e) => {
              notifyError();
            });
        }
      })
      .catch((e) => {
        e.errors.map(
          (
            e:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | ((props: ToastContentProps<unknown>) => React.ReactNode)
              | null
              | undefined
          ) => {
            toast.error(e, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
      });
  };

  const handelNameChange = (value: string) => {
    let addedCategory = category;
    if (addedCategory) {
      addedCategory.name = value;
      setCategory(addedCategory);
    }
  };
  const handleStatusChange = (value: boolean) => {
    let addedCategory = category;
    if (addedCategory) {
      addedCategory.isActive = value;
      setCategory(addedCategory);
      setStatus(value);
    }
  };
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
  const remove = (id: number) => {
    let updatedSpecs = specs.filter((s) => s.id !== id);
    setSpecs(updatedSpecs);
  };
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
    let addedCategory = category;
    if (addedCategory) {
      addedCategory.specs = currentSpecs.map((s) => s.value);
      setCategory(addedCategory);
    }

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
                handleChange={(e) => handleStatusChange(e.target.value)}
                items={StatusItems}
                label="status"
                value={status ? 1 : 0}
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
                    <>
                      <div className="row d-flex justify-content-center py-1">
                        Empty
                      </div>
                    </>
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
                              onClick={() => remove(s.id)}
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
      <ToastContainer />
    </>
  );
};
export default AddCategory;
