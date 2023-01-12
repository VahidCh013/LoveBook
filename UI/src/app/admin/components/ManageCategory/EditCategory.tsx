import React, { useEffect, useState } from "react";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import { StatusItems } from "../../../../shared/models/Status";
import { Categories } from "../../../../shared/repositories/categoryRepository";
interface ICreateServiceTypeProps {}
const AddCategory: React.FunctionComponent<ICreateServiceTypeProps> = () => {
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<boolean>();
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");


  useEffect(() => {
    const selectedCategory = Categories.find((c) => 
        c.id.toString() === id);
        setName(selectedCategory?.name);
        setStatus(selectedCategory?.status);
      },[]);
  const handleNameChange = (value:string) => {
    setName(value);
  };
  const handleStatusChange = () => {
    setStatus(!status);
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Edit category
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-6">
              <LInput
                handleChange={(e)=>handleNameChange(e.target.value)}
                defaultValue={name}
                caption="Name:"
              ></LInput>
            </div>
            <div className="col-md-1">
              <h5>Status:</h5>
            </div>
            <div className="col-md-2">
              <LDropdown
                handleChange={handleStatusChange}
                items={StatusItems}
                label="Status"
                value={status ? 1 : 0}
              ></LDropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCategory;
