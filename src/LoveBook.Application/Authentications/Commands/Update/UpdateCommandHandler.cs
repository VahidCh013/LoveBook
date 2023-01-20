using CSharpFunctionalExtensions;
using LoveBook.Domrin.Entities.ApplicationUsers;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace LoveBook.Application.Authentications.Commands.Update;

public class UpdateCommandHandler:IRequestHandler<UpdateUserCommand,Result<UpdateUserCommandPayload>>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public UpdateCommandHandler(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<Result<UpdateUserCommandPayload>> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    {
        var userExists = await _userManager.FindByIdAsync(request.userId);
        if (userExists == null)
            return Result.Failure<UpdateUserCommandPayload>("User does not exists");
        
        userExists?.UpdateFirstName(request.firstName);
        userExists?.UpdateLastName(request.lastName);
        userExists?.UpdatePhoneNumber(request.phoneNumber);

        if (userExists != null)
            await _userManager.UpdateAsync(userExists);
        return new Result<UpdateUserCommandPayload>();
    }
}