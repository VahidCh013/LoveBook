import logo from '../images/login.svg';
const Login = () => {
    return ( 
        <>
            <div  className="d-flex justify-content-end mt-2 px-3">
               <a>New User? Sign up</a>
            </div>
            <div className="container-fluid">
                <div className="row">
                   <div className="col-md-6">
                      <img className='logo ' src={logo} alt="" />
                   </div>
                   <div className="col-md-6 d-flex">
                      <div className='container mx-auto w-100'>
                        <div className="row align-items-center h-100" >
                            <div className="mx-auto">
                                <div className="logo-text display-5 ">
                                   Lovesbook
                                </div>
                                <input type='text' className='form-control w-50 mt-2'></input>
                                <input type='password' className='form-control w-50 mt-2'/>
                            
                                <div className="row mt-2">
                                    <div className="col-md-4"><button className='btn btn-warning w-50'>Login</button></div>
                                    <div className="col-md-8"><a className='w-50'>forget password</a></div>
                                </div>
                                <div className="col-md-12">  
                                   <p className='mt-5 pt-5'>Login with :</p>
                                   <a><i class="fa-brands fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
      
        </>
     );
}
 
export default Login;