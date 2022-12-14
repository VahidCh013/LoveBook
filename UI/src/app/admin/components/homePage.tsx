const HomePage = () => {
    return ( 
        <>
          <div className="row">
            <div className="col-md-4">
                <div className="title text-center display-5">
                    Lovesbook
                </div>
            </div>
            <div className="row col-md-8 d-flex justify-content-end">
                <div className="col-md-1 ">
                <span>admin</span>
                </div>
                <div className="col-md-2">
                    <button>Log out</button>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default HomePage;