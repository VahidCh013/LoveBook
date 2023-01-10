using CSharpFunctionalExtensions;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace LoveBook.Application.Authentications.Commands.Register;

public class RegisterCommandHandler:IRequestHandler<RegisterCommand,Result<Authentication>>
{
    private readonly UserManager<IdentityUser> _userManager;

    public RegisterCommandHandler(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
    }

    public async Task<Result<Authentication>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var userExists = await _userManager.FindByNameAsync(request.UserName);
        //if (userExists != null)
            //return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

        IdentityUser user = new ()
        {
            Email = "",
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = ""
        };
        //var result = await _userManager.CreateAsync(user, request.Password);
        //if (!result.Succeeded)
            //return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

        //return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        return null;
    }
}

