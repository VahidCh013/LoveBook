import { Link } from "react-router-dom";


interface INavBarProps{};
const NavBar :React.FunctionComponent<INavBarProps> = (iconDefinition) => {
    return ( 
        <>
           <div className="col-md-3 mt-4">
                <div className="mx-auto border border-3 rounded-4" 
                    style={{height:'80vh',width:'250px'}}>
                        <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
                            <div className="row col-md-7 ">
                                <div className="navbar-brand navbar-light mt-3">
                                    <Link to="/managebook">
                                        Manage book
                                    </Link>     
                                </div>
                                <div className="navbar-brand navbar-light mt-2">
                                    <Link to="/managecategory">
                                        Manage category
                                    </Link> 
                                </div>   
                            </div>
                        </nav>
                </div>
            </div>
        </>)
    }
export default NavBar;
