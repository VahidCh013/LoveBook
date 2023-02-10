import Cookies from "js-cookie";
import { Constants } from "../shared/constants/constant";

export const BaseUri: string = "https://localhost:5000";
export const Bearer:string="Bearer " + Cookies.get(Constants.LbToken);
