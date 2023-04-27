import logo from "../../../images/forgot-password.png";
import { useHistory } from "react-router-dom";
import LInputLogin from "../../../shared/components/LInputLogin";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../../scss/forgetPassword.scss";
import { ChangeEvent } from "react";
interface IForgetPasswordProps {}

const ForgetPassword: React.FunctionComponent<IForgetPasswordProps> = () => {
  const [email, setEmail] = useState(String);
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);
  const back = () => {
    history.push("/login");
  };
  const submit = () => {
    setShowMessage(true);
    // history.push("/resetpassword");
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-centet autoHeight">
        <div className="col-md-6 text-center">
          <img className="logo" src={String(logo)} alt="" />
        </div>
        <div className="col-md-4 d-flex">
          <div className="container mx-auto w-100">
            <div className="row align-items-center h-100">
              <div className="mx-auto mb-auto">
                <div className="title text-center display-5">lovesbook</div>
                <div className="text-center">
                  <h5>
                    <b>forget password?</b>
                  </h5>
                </div>
                <LInputLogin
                  id={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  iconDefinition={faEnvelope}
                  placeHolder="email"
                />
                {showMessage !== false && (
                  <div className="alert alert-dark">
                    <span>
                      A message was sent to your email address, please check
                      your email.
                    </span>
                  </div>
                )}
                <div className="row pt-4">
                  <div className="col-md-6 d-flex justify-content-around">
                    <button className="btn btn-light w-75" onClick={back}>
                      Back
                    </button>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <button className="btn btn-warning w-75" onClick={submit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
