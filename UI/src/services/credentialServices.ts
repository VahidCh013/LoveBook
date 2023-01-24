import { BaseUri, Bearer } from "./baseUri";
import axios from "axios";
import Cookies from "js-cookie";
import { Constants } from "../shared/constants/constant";
import { UserProfileDto } from "../shared/models/IUserProfile";

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

  public static async getUserProfile(email: string | undefined) {
    return await axios.get(
      `${BaseUri}/api/Authenticate/getUserByEmail/${email}`,
      {
        headers: {
          Authorization: Bearer,
        },
      }
    );
  }

  public static async editUser(userProfileModel: UserProfileDto) {
    return await axios.post(
      `${BaseUri}/api/Authenticate/updateUser`,
      userProfileModel,
      {
        headers: {
          Authorization: Bearer,
        },
      }
    );
  }
}
