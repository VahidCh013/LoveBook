import { Route } from "react-router-dom";

interface IManageBook{}

const ManageBook :React.FunctionComponent<IManageBook> = () => {
    return(
       <>
            <div className="container-fluid">
                <h3 className="mt-4 font-weight-bold" style={{fontWeight: 'bold'}}>Manage book</h3>
                <div className="addbook-btn d-flex justify-content-end p-4">
                    <button className="btn btn-lg">Add book +</button>
                </div>
                <div className="container">
                    
                </div>
            </div>
       </>
    );
}
export default ManageBook;