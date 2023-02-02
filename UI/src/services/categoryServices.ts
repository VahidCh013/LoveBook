import axios from "axios";
import { AddCategoryDto, showCategoryById } from "../shared/models/categoryDto";
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

  public static async getCategoryById(id: number) {
    return await axios.get(`${BaseUri}/api/Category/getCategoryById?id=${id}`,
    {
      headers: {
        Authorization: Bearer,
      },
    });
  }

  public static async updatedCategory(updateCategoryModel: showCategoryById) {
    return await axios.post(`${BaseUri}/api/Category/updateCategory`,
    updateCategoryModel,
    {
      headers: {
        Authorization: Bearer,
      },
    });
  }

  public static async deleteSpec(id: number , specId: number) {
    return await axios.post(`${BaseUri}/api/Category/deleteSpec?id=${id}&specId=${specId}` ,
    null ,
    {
      headers: {
        Authorization: Bearer,
      },
    });
  }
}
