using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Authentications.Commands.Update;

public record UpdateUserCommand(string userId,string firstName,string lastName,string phoneNumber) : IRequest<Result<UpdateUserCommandPayload>>;

public record UpdateUserCommandPayload(string[]? Errors=null);