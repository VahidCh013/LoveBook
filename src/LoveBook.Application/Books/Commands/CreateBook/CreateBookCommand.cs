using CSharpFunctionalExtensions;
using LoveBook.Application.Books.Moldes;
using MediatR;

namespace LoveBook.Application.Books.Commands.CreateBook;

public record CreateBookCommand(CreateBookModel  CreateBookModel) : IRequest<Result<CreateBookPayload>>;

public record CreateBookPayload(long? Id,string[]? Errors = null);
