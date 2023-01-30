import axios from "axios";
import Cookies from "js-cookie";
import { Constants } from "../shared/constants/constant";
import { AddCategoryDto, ShowCategory } from "../shared/models/categoryDto";
import { BaseUri, Bearer } from "./baseUri";

export class CategoryServises {
  public static async createCategory(categoryModel: AddCategoryDto) {
    return await axios.post(
      `${BaseUri}/api/Category/addCategory`,
      categoryModel,
      {
        headers: {
          Authorization: Bearer,
        },
      }
    );
  }

  public static async getCategory() {
    return await axios.get(`${BaseUri}/api/Category/GetAllCategories`, {
      headers: {
        Authorization: Bearer,
      },
    });
  }

  public static async deleteCategory(id: number) {
    return await axios.post(`${BaseUri}/api/Category/deleteCategory?id=${id}`, null,{
      headers: {
        Authorization: Bearer,
      },
    });
  }
}
