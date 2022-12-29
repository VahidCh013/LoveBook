
import { NavLink,Link, Route, Switch } from "react-router-dom";
import { Routes } from "../../../../shared/routes/routes";
import AddBook from "../ManageBooks/AddBook";
import ManageBook from "../ManageBooks/ManageBook";
import ManageCategory from "../ManageBooks/managecategory";
import NavBar from "../NavBar/navbar";

interface IHomePageProps{}

const HomePage :React.FunctionComponent<IHomePageProps> = () => {
    return ( 
        <>
          <div className="container-fluid">
            <div className="row py-2">
                <div className="col-md-3">
                    <div className="adminPpageTitle text-center display-5">
                        Lovesbook
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-end">
                    <span className="">admin</span>
                </div>
            </div>
            <div className="row">
                <NavBar/>
                <div className="col-md-9">
                    <Switch>
                        <Route path={Routes.ManageBook} component={ManageBook}></Route>
                        <Route path={Routes.ManageCategory} component={ManageCategory}></Route>  
                        <Route path={Routes.AddBook} component={AddBook}></Route>                      
                    </Switch>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default HomePage;