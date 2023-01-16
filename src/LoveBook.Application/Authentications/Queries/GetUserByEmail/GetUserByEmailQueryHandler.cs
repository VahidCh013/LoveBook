using CSharpFunctionalExtensions;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace LoveBook.Application.Authentications.Queries.GetUserByEmail;

public class GetUserByEmailQueryHandler:IRequestHandler<GetUserByEmailQuery,Result<UserResponse>>
{
    private readonly LoveBookDbContext _dbContext;

    public GetUserByEmailQueryHandler(IConfiguration configuration, LoveBookDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<UserResponse>> Handle(GetUserByEmailQuery request, CancellationToken cancellationToken)
    {
        var user =await _dbContext.Users.SingleOrDefaultAsync(x => x.Email == request.Email, cancellationToken: cancellationToken);
        return Maybe.From(user)
            .ToResult("No user found")
            .MapTry(u => new UserResponse(
                u.Id,
                u.UserName,
                u.Email,
                u.PhoneNumber,
                u.FirstName,
                u.LastName));
    }
}