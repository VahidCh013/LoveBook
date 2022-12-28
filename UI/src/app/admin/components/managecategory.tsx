interface IManageBook{}

const ManageCategory :React.FunctionComponent<IManageBook> = () => {
    return(
       <>
         <div className="container-fluid">
                <h3 className="mt-4 font-weight-bold" style={{fontWeight: 'bold'}}>Manage category</h3>
                <div className="addbook-btn d-flex justify-content-end p-4">
                    <button className="btn btn-lg">Add category +</button>
                </div>
                
            </div>
       </>
    );
}
export default ManageCategory;