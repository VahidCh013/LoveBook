import Cookies from "js-cookie";
import { Route, Switch } from "react-router-dom";
import { Constants } from "../../../../shared/constants/constant";
import { Routes } from "../../../../shared/routes/routes";
import AddBook from "../ManageBooks/AddBook";
import EditBook from "../ManageBooks/EditBook";
import ManageBook from "../ManageBooks/ManageBook";
import AddCategory from "../ManageCategory/AddCategory";
import EditCategory from "../ManageCategory/EditCategory";
import ManageCategory from "../ManageCategory/ManageCategory";
import NavBar from "../NavBar/navbar";
import Dashboard from "./Dashboard";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const user = Cookies.get(Constants.Email);
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2">
          <div className="col-md-3">
            <div className="adminPpageTitle text-center display-5">
              Lovesbook
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-end pt-2">
            <span className="">{user}</span>
          </div>
          <div className="col-md-1"><Dashboard></Dashboard></div>
        </div>
        <div className="row">
          <NavBar />
          <div className="col-md-9">
            <Switch>
              <Route path={Routes.ManageBook} component={ManageBook}></Route>
              <Route
                path={Routes.ManageCategory}
                component={ManageCategory}
              ></Route>
              <Route path={Routes.AddBook} component={AddBook}></Route>
              <Route path={Routes.EditBook} component={EditBook}></Route>
              <Route path={Routes.AddCategory} component={AddCategory}></Route>
              <Route
                path={Routes.EditCategory}
                component={EditCategory}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
