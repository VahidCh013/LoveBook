/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { ActivateBookPayload } from './models/ActivateBookPayload';
export type { AddCategoryPayLoad } from './models/AddCategoryPayLoad';
export type { BookDto } from './models/BookDto';
export type { CategoryDto } from './models/CategoryDto';
export type { CreateBookDto } from './models/CreateBookDto';
export type { CreateBookPayload } from './models/CreateBookPayload';
export type { DeactivateBookPayload } from './models/DeactivateBookPayload';
export type { DeleteCategoryPayload } from './models/DeleteCategoryPayload';
export type { DeleteSpecPayload } from './models/DeleteSpecPayload';
export type { EditCategoryModel } from './models/EditCategoryModel';
export type { EditCategoryPayload } from './models/EditCategoryPayload';
export type { GetAllCategoriesDto } from './models/GetAllCategoriesDto';
export type { GetCategoryByIdDto } from './models/GetCategoryByIdDto';
export type { LoginModel } from './models/LoginModel';
export type { RegisterModel } from './models/RegisterModel';
export type { SpecDto } from './models/SpecDto';
export type { SpecModel } from './models/SpecModel';
export type { SpecValueDto } from './models/SpecValueDto';
export type { UpdateUserModel } from './models/UpdateUserModel';

export { AuthenticateService } from './services/AuthenticateService';
export { BookService } from './services/BookService';
export { CategoryService } from './services/CategoryService';
