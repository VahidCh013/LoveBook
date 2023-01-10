using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Authentications.Commands.Register;

public record RegisterCommand(string UserName,string Password,string Email):IRequest<Result<Authentication>>;

public record Authentication(string Token,List<string>? Errors=null);