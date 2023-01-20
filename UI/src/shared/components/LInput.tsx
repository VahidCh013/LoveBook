import React, { ChangeEvent } from "react";

interface ILInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  defaultValue?: string;
  caption?: string | undefined;
}

const LInput: React.FunctionComponent<ILInputProps> = ({
  handleChange,
  placeHolder,
  defaultValue,
  caption,
}) => {
  return (
    <>
      <div className="row mb-3">
        {caption !== undefined && (
          <div className="col-md-3 pt-2">
            <h6>{caption}</h6>
          </div>
        )}
        <div className="col-md-8 px-1">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder={placeHolder}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    </>
  );
};
export default LInput;
