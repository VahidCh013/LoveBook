using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Authentications.Queries.GetUserByEmail;

public sealed record GetUserByEmailQuery(string Email):IRequest<Result<UserResponse>>;