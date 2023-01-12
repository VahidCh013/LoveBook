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
          <div className="col-md-2 pt-2">
            <h5>{caption}</h5>
          </div>
        )}
        <div className="col-md-9">
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
