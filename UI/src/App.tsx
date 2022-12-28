
import Login from './app/login/components/login';
import HomePage from './app/admin/components/homePage';
import { Switch, Route } from 'react-router-dom';
import ForgetPassword from './app/login/components/forgetPassword';

const App = () => {
  const loggedIn=true;
  return (
    <>
     {
      loggedIn ? <HomePage/>: <Login/>
     }
     <Switch>
        <Route exact path='/forgetPassword' component={ForgetPassword}></Route> 
        <Route exact path='/login' component={Login}></Route>
     </Switch>
     
  </>
  )
};

export default App;
