import React, { useState } from "react";

interface ILToogleProps {
  onclick:any;
  row:any;
}
const LToogle: React.FunctionComponent<ILToogleProps> = ({
  onclick,
  row
}) => {
  const [status, setStatus] = useState(row.status);
  const handleClick = () => {
    setStatus(!status);
    onclick(row.id);
  };
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          checked={status}
          onClick={handleClick}
        ></input>
        <span className="slider round"></span>
      </label>
    </>
  );
};
export default LToogle;
