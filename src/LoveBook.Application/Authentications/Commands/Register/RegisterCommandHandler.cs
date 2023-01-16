

using CSharpFunctionalExtensions;
using LoveBook.Domrin.Entities.ApplicationUsers;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace LoveBook.Application.Authentications.Commands.Register;

public class RegisterCommandHandler:IRequestHandler<RegisterCommand,Result<Authentication>>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public RegisterCommandHandler(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
    }

    public async Task<Result<Authentication>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var userExists = await _userManager.FindByNameAsync(request.UserName);
        if (userExists != null)
            return Result.Failure<Authentication>("User does not exists");

        ApplicationUser user = new ()
        {
            Email =request.Email,
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = request.UserName
        };
        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
            return Result.Failure<Authentication>("User creation failed! Please check user details and try again.");

        return Result.Success<Authentication>(new Authentication(null));

    }
}

