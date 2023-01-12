import { BaseUri } from "./baseUri";
import axios from "axios";

export class CredentialService {
  // public static async loginUser(userName: string, password: string) {
  //   return axios({
  //     baseURL: BaseUri,
  //     url: "/api/Authenticate/login",
  //     headers: {
  //     "Content-Type": "application/json",
  //    'Authorization': Cookies.get('LB_Token')
  //     },
  //     method: "POST",
  //     data: {
  //       userName: userName,
  //       password: password,
  //     },
  //     responseType: "json",
  //   });
  // }

  public static async loginUser(userName: string, password: string) {
    return await axios.post(`${BaseUri}/api/Authenticate/login`, {
      userName,
      password,
    });
  }
}
