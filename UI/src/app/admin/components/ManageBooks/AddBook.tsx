import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BookServices } from "../../../../services/bookServices";
import { CategoryServises } from "../../../../services/categoryServices";
import LButton from "../../../../shared/components/LButton";
import LDropdown from "../../../../shared/components/LDropdown";
import LInput from "../../../../shared/components/LInput";
import { CreateBook } from "../../../../shared/models/bookDto";
import {
  IAddSpec,
  ISpecDto,
  ShowCategory,
  ShowCategoryInBook,
} from "../../../../shared/models/categoryDto";
import { StatusItems } from "../../../../shared/models/Status";
import { ADDBOOKVALIDATION } from "../../Validations/validation";

interface IAddBookProps {}
const AddBook: React.FunctionComponent<IAddBookProps> = () => {
  const history = useHistory();

  // const [book, setBook] = useState<AddBook>({
  //   categoryId: 0,
  //   isActive: false,
  //   name: "",
  //   specValues: [,""],
  // });
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [categories, setCategories] = useState<ShowCategoryInBook[]>([]);
  const [specs, setSpecs] = useState<ISpecDto[]>([]);
  // const [addSpecs, setAddSpecs] = useState<IAddSpec[]>([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    await CategoryServises.getCategory().then((response) => {
      var categoryResult = response.data.map((c: ShowCategory) => {
        return { id: c.id, value: c.name };
      });
      setCategories(categoryResult);
    });
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleStatusChange = (value: boolean) => {
    setStatus(value);
  };
  const handleCategoryChange = async (id: number) => {
    console.log(id);
    await CategoryServises.getCategoryById(id).then((response) => {
      setSpecs(response.data.specs);
    });
    setCategoryId(id);
  };
  const handleAddSpecsChange = (id: number, value: string) => {
    let addedSpecValue = specs.map((s) => {
      if (s.id === id) {
        s.value = value;
      }
      return s;
    });
    setSpecs(addedSpecValue);
  };
  const handleReturn = () => {
    history.push("/managebook");
  };
  const handleSubmit = async () => {
    var specvalues = specs.map((s) => {
      return {
        specId: s.id,
        value: s.value??"",
      };
    });
    const book:CreateBook = {

      name: name??"",
      isActive: status?true:false,
      categoryId: categoryId,
      specValues: specvalues,
    };
    ADDBOOKVALIDATION.validate(book)
      .then(() => {
        if (book) {
          BookServices.createBook(book)
          .then((response) => {
            setTimeout(() => {
              history.push("/managebook");
            },2000);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          Add book
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-6">
              <LInput
                handleChange={(e) => handleNameChange(e.target.value)}
                caption="Name:"
              ></LInput>
            </div>
            <div className="col-md-1 pt-2">
              <h5>Status:</h5>
            </div>
            <div className="col-md-2">
              <LDropdown
                handleChange={(e) => handleStatusChange(e.target.value)}
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
                handleChange={(e) => handleCategoryChange(e.target.value)}
                items={categories}
                label="category"
              ></LDropdown>
            </div>
          </div>
          <div className="row px-4 mt-5">
            <h4 className="mt-6">Specifications</h4>
          </div>
          <div className="row mx-4">
            <div className="border px-4 mt-3">
              {specs.map((s) => {
                return (
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="col-md-8">
                        <LInput
                          handleChange={(e) =>
                            handleAddSpecsChange(s.id, e.target.value)
                          }
                          caption={s.name}
                        ></LInput>
                      </div>
                    </div>
                  </div>
                );
              })}
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
