import logo from "../../../images/userLogin.svg";
import LInputLogin from "../../../shared/components/LInputLogin";
import { useHistory, Link } from "react-router-dom";
import InputPassword from "../../../shared/components/LInputPassword";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import { useState } from "react";
import { CredentialService } from "../../../services/credentialServices";
import Cookies from "js-cookie";
import { Constants } from "../../../shared/constants/constant";
import { addMinutes } from "../../../shared/utils/util";
import {
  LoginModel,
  AuthenticateService,
  OpenAPI,
} from "../../../libs/openapi-client";

interface ILoginProps {}
const Login: React.FunctionComponent<ILoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loginFailure, setLoginFailure] = useState({
    failed: false,
    message: "",
  });
  const login = async () => {
    let loginModel: LoginModel = {
      username: email,
      password: password,
    };
    await AuthenticateService.postApiAuthenticateLogin(loginModel)
      .then((response) => {
        console.log(response);
        const date = new Date();
        var expireDate = addMinutes(date, 180);
        OpenAPI.TOKEN = response.data.token;
        console.log(OpenAPI.TOKEN);
        Cookies.set(Constants.LbToken, response.data.token, {
          expires: expireDate,
        });
        Cookies.set(Constants.Email, email);
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error.body);
        error.body?.status === 401
          ? setLoginFailure({
              failed: true,
              message: "Username or password is incorrect",
            })
          : setLoginFailure({ failed: true, message: "Something went wrong" });
      });
  };
  const forgetPassword = () => {
    history.push("forgetPassword");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="col-md-4 d-flex">
            <div className="container mx-auto w-100">
              <div className="row align-items-center h-100">
                <div className="mx-auto">
                  <div className="title text-center display-5 ">Lovesbook</div>
                  {loginFailure.failed && (
                    <div className="col-md-12">
                      <div className="alert alert-danger">
                        <p className="mb-0">{loginFailure.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="col-md-12">
                    <LInputLogin
                      id="email"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      iconDefinition={faEnvelope}
                      placeHolder="email"
                    />
                  </div>
                  <div className="col-md-12">
                    <InputPassword
                      id="password"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      placeHolder="password"
                      iconDefinition={faLock}
                    />
                  </div>
                  <div className="row pt-4">
                    <div className="col-md-6 d-flex justify-content-around">
                      <button className="btn btn-warning w-75" onClick={login}>
                        Login
                      </button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-around text-end pt-3">
                      <Link to="/forgetPassword">forget password</Link>
                    </div>
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

export default Login;
