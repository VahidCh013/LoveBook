import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import{BrowserRouter} from 'react-router-dom';
import '../src/scss/style.scss'

ReactDOM.render(

        <BrowserRouter>
            <App/>
        </BrowserRouter>

  ,
  document.getElementById('root'));
