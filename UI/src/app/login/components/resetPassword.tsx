import React from "react";
import logo from "../../../images/resetpassword.svg";
interface IResetPasswordProps {}
const ResetPassword: React.FunctionComponent<IResetPasswordProps> = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
