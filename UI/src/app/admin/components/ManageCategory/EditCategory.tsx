import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CategoryServises } from "../../../../services/categoryServices";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import LPopUp from "../../../../shared/components/LPopUp";
import {
  ISpecDto,
  showCategoryById,
} from "../../../../shared/models/categoryDto";
import { StatusItems } from "../../../../shared/models/Status";
import { ADDCATEGORYVALIDATION } from "../../Validations/validation";
interface ICreateServiceTypeProps {}
const AddCategory: React.FunctionComponent<ICreateServiceTypeProps> = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [showAddSpecPopUp, setShowAddSpecPopUp] = useState(false);
  const [showDeleteSpecPopUp, setShowDeleteSpecPopUp] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [specs, setSpecs] = useState<ISpecDto[]>();
  const [deleteSpecId, setDeleteSpecId] = useState<number>();
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const [id, setId] = useState(params.get("id"));

  const notify = () =>
    toast.success("Category updated successfuly", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    if (id) {
      const getCategoryById = async (id: number) => {
        await CategoryServises.getCategoryById(id).then((response) => {
          let { isActive, name, specs }: showCategoryById = response.data;
          setName(name);
          setSpecs(specs);
          setStatus(isActive);
        });
      };
      getCategoryById(parseInt(id));
    }
  }, []);

  const handleAdd = () => {
    setShowAddSpecPopUp(true);
  };

  const changeSpecValue = (value: string) => {
    setSpecValue(value);
  };

  const onCancel = () => {
    setShowAddSpecPopUp(false);
  };

  const onConfirm = () => {
    const specCount = specs?.length ?? 0;
    const spec = {
      id: specCount ?? specCount + 1,
      name: specValue
    };
    specs?.push(spec);
    setShowAddSpecPopUp(false);
  };

  const handleSpecValueChange = (id: number, value: string) => {
    let updateSpecs = specs?.map((s) => {
      if (s.id === id) {
        s.name = value;
      }
      return s;
    });
    setSpecs(updateSpecs);
  };

  const remove = (id: number) => {
    setDeleteSpecId(id);
    setShowDeleteSpecPopUp(true);
  };

  const onCancelDeleteSpec = () => {
    setShowDeleteSpecPopUp(false);
  };

  const onConfirmDeleteSpec = async () => {
    if (deleteSpecId && id) {
      await CategoryServises.deleteSpec(parseInt(id), deleteSpecId)
        .then((_) => {
          const updatedSpecs = specs?.filter((s) => s.id !== deleteSpecId);
          setSpecs(updatedSpecs);
          setShowDeleteSpecPopUp(false);
          notify();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleReturn = () => {
    history.push("/managecategory");
  };

  const handleSubmit = async () => {
    if (id && specs) {
      const category = {
        id: parseInt(id),
        isActive: status ? true : false,
        name: name,
        specs: specs,
      };
      ADDCATEGORYVALIDATION.validate(category).then(() => {
        if (category) {
          console.log(category);
          CategoryServises.updatedCategory(category)
            .then((_) => {
              notify();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
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

  const headerDelete = (
    <>
      <h5>Delete Specification</h5>
    </>
  );
  const bodyDelete = (
    <>
      <h6>
        By deleting this spec, all bookspecs will be deleted too, are sure?{" "}
      </h6>
    </>
  );
  const footerDelete = (
    <>
      <button className="btn" onClick={onCancelDeleteSpec}>
        Cancel
      </button>
      <button className="btn btn-success" onClick={onConfirmDeleteSpec}>
        Delete
      </button>
    </>
  );

  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Edit category
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-5">
              <LInput
                handleChange={(e) => setName(e.target.value)}
                value={name}
                caption="Name:"
              ></LInput>
            </div>
            <div className="col-md-1 pt-2 px-5">
              <h6>Status:</h6>
            </div>
            <div className="col-md-2 px-4">
              <LDropdown
                handleChange={(e) => setStatus(e.target.value)}
                items={StatusItems}
                label="Status"
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
                  {specs === null ? (
                    <>
                      <div className="row d-flex justify-content-center py-1">
                        Empty
                      </div>
                    </>
                  ) : (
                    specs?.map((s) => {
                      return (
                        <>
                          <div className="col-md-6">
                            <div className="col-md-8">
                              <LInput
                                value={s.name}
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
      {showAddSpecPopUp && (
        <LPopUp
          headerNode={headerAdd}
          children={bodyAdd}
          footerNode={footerAdd}
          show={showAddSpecPopUp}
        ></LPopUp>
      )}
      {showDeleteSpecPopUp && (
        <LPopUp
          headerNode={headerDelete}
          children={bodyDelete}
          footerNode={footerDelete}
          show={showDeleteSpecPopUp}
        ></LPopUp>
      )}
      <ToastContainer />
    </>
  );
};
export default AddCategory;
