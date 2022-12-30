import React from "react";
import { IColumn } from "../models/IColumn";
import LButton from "./LButton";
import LToogle from "./LToogle";

interface ILTablePropes {
  columns: IColumn[];
  data: any[];
  includeTools: boolean;
}
const LTable: React.FunctionComponent<ILTablePropes> = ({
  columns,
  data,
  includeTools,
}) => {
  if (includeTools) columns.push({ name: "" });

  const edit = (book: any) => {
    console.log(book.name);
  };

  const save = (book: any) => {
    console.log(book);
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
          {data.map((b) => {
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
                        onClick={() => edit(b)}
                      ></LButton>
                      <LButton
                        className="fa fa-trash text-danger"
                        onClick={()=>save(b)}
                      ></LButton>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default LTable;
