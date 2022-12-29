import React, { useEffect, useState } from "react";
import { IColumn } from "../models/IColumn";

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
                <td>{b.status}</td>
                <td>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-end">
                      edit
                    </div>
                    <div className="col-md-6">delete</div>
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
