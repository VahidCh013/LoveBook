import React, { useState } from "react";
import { IColumn } from "../models/IColumn";
import LButton from "./LButton";
import LPopUp from "./LPopUp";
import LToogle from "./LToogle";

interface ILTableProps {
  columns: IColumn[];
  data: any[];
  includeTools: boolean;
  handleDelete:(id: number) =>void;
  handleEdit:(id: number)=>void;

}
const LTable: React.FunctionComponent<ILTableProps> = ({
  columns,
  data,
  includeTools,
  handleDelete,
  handleEdit
}) => {
  if (includeTools) columns.push({ name: "" });
  const [id, setId] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const onCancel = (): void => {
    setShowPopUp(false);
  };
  const edit = (id: number) => {
    handleEdit(id);
  };

  const remove = (id: number) => {
    setId(id);
    setShowPopUp(true);
  };

  const onConfirm = () => {
    handleDelete(id);
    setShowPopUp(false);
  };
  const changeStatus = (id: number) => {
    console.log(id);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c) => {
              return (
                <>
                  <th className="w-25">{c.name}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr className="mt-3">
              <td colSpan={columns.length}>
                <h5 className="text-center">Nothing to show</h5>
              </td>
            </tr>
          ) : (
            data.map((b) => {
              return (
                <tr>
                  <td>{b.name}</td>
                  <td>
                    <LToogle row={b} onclick={changeStatus}></LToogle>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col-md-6 d-flex justify-content-end ">
                        <LButton
                          className="fa fa-pencil text-success"
                          onClick={() => edit(b.id)}
                        ></LButton>
                        <LButton
                          className="fa fa-trash text-danger"
                          onClick={() => remove(b.id)}
                        ></LButton>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <LPopUp
        show={showPopUp}
        handleCancel={onCancel}
        handleConfirm={onConfirm}
      />
    </>
  );
};
export default LTable;
