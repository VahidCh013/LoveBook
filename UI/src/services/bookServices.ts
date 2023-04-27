import axios from "axios";
import { CreateBook } from "../shared/models/bookDto";
import { BaseUri, Bearer } from "./baseUri";

export class BookServices {

    public static async createBook(bookModel: CreateBook) {
        return await axios.post(
            `${BaseUri}/api/Book/addBook` ,
            bookModel,
            {
                headers: {
                    Authorization: Bearer,
                },
            }
        );
    }

    public static async getBook() {
        return await axios.get(
            `${BaseUri}/api/Book/getBooks`,
            {
                headers: {
                    Authorization: Bearer,
                },
            }
            );
    }

    public static async deleteBook(id: number) {
        
    }

    public static async activeBook(bookId: number) {
        return await axios.post(`${BaseUri}/api/Book/activateBook?id=${bookId}`,null,
        {
            headers: {
                Authorization: Bearer,
            },
        });
    }
}