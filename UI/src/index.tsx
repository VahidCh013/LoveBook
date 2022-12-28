import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import '../src/scss/style.scss'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

        <BrowserRouter>
            <App/>
        </BrowserRouter>

  ,
  document.getElementById('root'));
