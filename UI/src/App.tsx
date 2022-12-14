
import Login from './app/login/components/login';
import ForgetPassword from './app/login/components/forgetPassword'
import HomePage from './app/admin/components/homePage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/forgetPassword' component={ForgetPassword}></Route>
      <Route path='/homePage' component={HomePage}></Route>
      
    </Switch>
  </>
  )
};

export default App;
