
import { NavLink,Link, Route, Switch } from "react-router-dom";
import ManageBook from "./managebook";
import ManageCategory from "./managecategory";
import NavBar from "./navbar";

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
                        <Route path='/managebook' component={ManageBook}></Route>
                        <Route path='/managecategory' component={ManageCategory}></Route>                        
                    </Switch>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default HomePage;