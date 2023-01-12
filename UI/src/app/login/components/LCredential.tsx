import React from "react";
import { Route, Switch } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";

interface ICredentialProps {}
const Credential: React.FunctionComponent<ICredentialProps> = () => {
  return (
    <Switch>
      <Route exact path="/forgetPassword" component={ForgetPassword}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route path="/" component={Login}></Route>
    </Switch>
  );
};
export default Credential;
