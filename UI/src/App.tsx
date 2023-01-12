import Cookies from "js-cookie";
import HomePage from "./app/admin/components/Home/HomePage";
import LCredential from "./app/login/components/LCredential";
import { Constants } from "./shared/constants/constant";

const App = () => {
  const loggedIn = Cookies.get(Constants.LbToken);

  return <>{loggedIn ? <HomePage /> : <LCredential />}</>;
};

export default App;
