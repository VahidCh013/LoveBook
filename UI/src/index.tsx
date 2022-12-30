import ReactDOM from "react-dom";
import "react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
