
using LoveBook.Domain.Entities.Books;
using MediatR;

namespace LoveBook.Application.Books.Queries.GetAllBooks;

public record GetAllBooksQuery:IRequest<List<Book>>;