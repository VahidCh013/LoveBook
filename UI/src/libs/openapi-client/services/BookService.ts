/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateBookPayload } from '../models/ActivateBookPayload';
import type { BookDto } from '../models/BookDto';
import type { CreateBookDto } from '../models/CreateBookDto';
import type { CreateBookPayload } from '../models/CreateBookPayload';
import type { DeactivateBookPayload } from '../models/DeactivateBookPayload';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookService {

    /**
     * @param requestBody 
     * @returns CreateBookPayload Success
     * @throws ApiError
     */
    public static postApiBookAddBook(
requestBody?: CreateBookDto,
): CancelablePromise<CreateBookPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Book/addBook',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns BookDto Success
     * @throws ApiError
     */
    public static getApiBookGetBooks(): CancelablePromise<Array<BookDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Book/getBooks',
        });
    }

    /**
     * @param bookId 
     * @returns ActivateBookPayload Success
     * @throws ApiError
     */
    public static postApiBookActivateBook(
bookId?: number,
): CancelablePromise<ActivateBookPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Book/activateBook',
            query: {
                'bookId': bookId,
            },
        });
    }

    /**
     * @param bookId 
     * @returns DeactivateBookPayload Success
     * @throws ApiError
     */
    public static postApiBookDeactivateBook(
bookId?: number,
): CancelablePromise<DeactivateBookPayload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Book/deactivateBook',
            query: {
                'bookId': bookId,
            },
        });
    }

}
