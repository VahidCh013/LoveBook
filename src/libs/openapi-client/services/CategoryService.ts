/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCategoryPayLoad } from '../models/AddCategoryPayLoad';
import type { CategoryDto } from '../models/CategoryDto';
import type { DeleteCategoryPayload } from '../models/DeleteCategoryPayload';
import type { DeleteSpecPayload } from '../models/DeleteSpecPayload';
import type { EditCategoryModel } from '../models/EditCategoryModel';
import type { EditCategoryPayload } from '../models/EditCategoryPayload';
import type { GetAllCategoriesDto } from '../models/GetAllCategoriesDto';
import type { GetCategoryByIdDto } from '../models/GetCategoryByIdDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @param requestBody 
     * @returns AddCategoryPayLoad Success
     * @throws ApiError
     */
    public static postApiCategoryAddCategory(
requestBody?: CategoryDto,
): CancelablePromise<AddCategoryPayLoad> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Category/addCategory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns GetAllCategoriesDto Success
     * @throws ApiError
     */
    public static getApiCategoryGetAllCategories(): CancelablePromise<Array<GetAllCategoriesDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Category/GetAllCategories',
        });
    }

    /**
     * @param id 
     * @returns GetCategoryByIdDto Success
     * @throws ApiError
     */
    public static getApiCategoryGetCategoryById(
id?: number,
): CancelablePromise<GetCategoryByIdDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Category/getCategoryById',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns DeleteCategoryPayload Success
     * @throws ApiError
     */
    public static postApiCategoryDeleteCategory(
id?: number,
): CancelablePromise<DeleteCategoryPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Category/deleteCategory',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns EditCategoryPayload Success
     * @throws ApiError
     */
    public static postApiCategoryUpdateCategory(
requestBody?: EditCategoryModel,
): CancelablePromise<EditCategoryPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Category/updateCategory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param specId 
     * @returns DeleteSpecPayload Success
     * @throws ApiError
     */
    public static postApiCategoryDeleteSpec(
id?: number,
specId?: number,
): CancelablePromise<DeleteSpecPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Category/deleteSpec',
            query: {
                'id': id,
                'specId': specId,
            },
        });
    }

}
