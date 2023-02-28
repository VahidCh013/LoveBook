using CSharpFunctionalExtensions;
using LoveBook.Application.Books.Commands.ActivateBook;
using MediatR;

namespace LoveBook.Application.Books.Commands.DeactivateBook;

public record DeactivateBookCommand(long BookId):IRequest<Result<DeactivateBookPayload>>;

public record DeactivateBookPayload(long? Id,string[]? Errors = null);