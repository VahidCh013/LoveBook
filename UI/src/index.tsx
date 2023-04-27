import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import App from "./App";
import { OpenAPI } from "./libs/openapi-client/core/OpenAPI";

import { BrowserRouter } from "react-router-dom";

OpenAPI.BASE = "http://localhost:5000";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
