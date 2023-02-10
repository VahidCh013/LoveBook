import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import { IDropDownList } from "../utils/IDropDownList";
interface IlDropdownProps {
  value?: number;
  label: string;
  handleChange: (e: any) => void;
  items: IDropDownList[];
}
const LDropdown: React.FunctionComponent<IlDropdownProps> = ({
  value,
  label,
  handleChange,
  items,
}) => {
  return (
    <>
      <div className="row px-3">
        <Select
          labelId={label}
          id="dropdown"
          value={value}
          label={label}
          onChange={handleChange}
          className="h6"
        >
          {items.map((item) => {
            return <MenuItem value={item.id}>{item.value}</MenuItem>;
          })}
        </Select>
      </div>
    </>
  );
};
export default LDropdown;
