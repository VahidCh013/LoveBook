import React from "react";
interface ILbuttonProps {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;

}
const LButton: React.FunctionComponent<ILbuttonProps> = ({
  className,
  onClick,

}) => {
  return (
    <>
      <button className="btn " onClick={onClick}>
        <i className={className}></i>
      </button>
    </>
  );
};
export default LButton;
