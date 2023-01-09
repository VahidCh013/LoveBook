import { Button } from "@mui/material";
import React from "react";
interface ILbuttonProps {
  onClick: () => void;
  label: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}
const LButton: React.FunctionComponent<ILbuttonProps> = ({
  onClick,
  label,
  color,
}) => {
  return (
    <>
      <Button variant="contained" color={color} onClick={onClick}>
        {label}
      </Button>
    </>
  );
};
export default LButton;
