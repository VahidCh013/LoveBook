import React, { ChangeEvent } from "react";

interface ILInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  value?: string;
  caption?: string | undefined;
}

const LInput: React.FunctionComponent<ILInputProps> = ({
  handleChange,
  placeHolder,
  value,
  caption,
}) => {
  return (
    <>
      <div className="row mb-3">
        {caption !== undefined && (
          <div className="col-md-2 pt-2">
            <h6>{caption}</h6>
          </div>
        )}
        <div className="col-md-8 px-1">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder={placeHolder}
            value={value}
          />
        </div>
      </div>
    </>
  );
};
export default LInput;
