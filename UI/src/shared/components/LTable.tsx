import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { IColumn } from "../models/IColumn";
import LPopUp from "./LPopUp";
import LToogle from "./LToogle";

interface ILTableProps {
  columns: IColumn[];
  data: any[];
  includeTools: boolean;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleChangeStatus: (id: number) => void;
}
const LTable: React.FunctionComponent<ILTableProps> = ({
  columns,
  data,
  includeTools,
  handleDelete,
  handleEdit,
  handleChangeStatus,
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
    handleChangeStatus(id);
  };
  const header = <>Are you sure to delete?</>;
  const body = (
    <>The selected .... will be deleted. Are you sure want to continue ?</>
  );
  const footer = (
    <>
      <button className="btn" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={onConfirm}>
        Yes
      </button>
    </>
  );

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
                        <IconButton
                          aria-label="Example"
                          onClick={() => edit(b.id)}
                        >
                          <i className="fa fa-pencil text-success fa-2xs"></i>
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => remove(b.id)}
                        >
                          <i className="fa fa-trash-o text-danger"></i>
                        </IconButton>
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
        children={body}
        headerNode={header}
        footerNode={footer}
      ></LPopUp>
    </>
  );
};
export default LTable;
