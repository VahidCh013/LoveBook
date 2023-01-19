using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Authentications.Commands.Register;

public record RegisterCommand(string UserName,string Password,string Email,string FirstName, string LastName):IRequest<Result<Authentication>>;

public record Authentication(string[]? Errors=null);