import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";

interface INavBarProps {}
const NavBar: React.FunctionComponent<INavBarProps> = (iconDefinition) => {
  return (
    <>
      <div className="col-md-3 mt-4">
        <div
          className="mx-auto border border-3 rounded-4"
          style={{ height: "80vh", width: "250px" }}
        >
          <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
            <div className="row ">
              <div className="col-md-12 mt-4">
                <div className="navbar-brand navbar-light mt-3">
                  <Link className="border-bottom" to="/managebook">
                    <i className="fa fa-book fa-2xs"></i>
                    <span> Manage book</span>
                  </Link>
                </div>
                <div className="navbar-brand navbar-light mt-2">
                  <Link className="border-bottom" to="/managecategory">
                    <i className="fa fa-list fa-2xs"></i>
                    <span> Manage category</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default NavBar;
