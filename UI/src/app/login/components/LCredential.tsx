import React from "react";
import { Route, Switch } from "react-router-dom";
import ForgetPassword from "./forgetPassword";
import Login from "./login";
import ResetPassword from "./resetPassword";

interface ICredentialProps {}
const Credential: React.FunctionComponent<ICredentialProps> = () => {
  return (
    <Switch>
      <Route exact path="/forgetPassword" component={ForgetPassword}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/resetpassword" component={ResetPassword}></Route>
      <Route path="/" component={Login}></Route>
    </Switch>
  );
};
export default Credential;
