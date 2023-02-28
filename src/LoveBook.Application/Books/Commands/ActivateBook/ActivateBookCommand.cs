using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Books.Commands.ActivateBook;

public record ActivateBookCommand(long BookId):IRequest<Result<ActivateBookPayload>>;

public record ActivateBookPayload(long? Id,string[]? Errors = null);