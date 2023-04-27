/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginModel } from '../models/LoginModel';
import type { RegisterModel } from '../models/RegisterModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticateService {

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthenticateLogin(
requestBody?: LoginModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Authenticate/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthenticateRegister(
requestBody?: RegisterModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Authenticate/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthenticateUpdateUser(
requestBody?: UpdateUserModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Authenticate/updateUser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param userEmail 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiAuthenticateGetUserByEmail(
userEmail: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Authenticate/getUserByEmail/{userEmail}',
            path: {
                'userEmail': userEmail,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthenticateRegisterAdmin(
requestBody?: RegisterModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Authenticate/register-admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
