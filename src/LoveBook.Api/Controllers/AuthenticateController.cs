using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CSharpFunctionalExtensions;
using Lovebook.Api.Dtos;
using LoveBook.Api.Models;
using LoveBook.Application.Authentications.Commands.Register;
using LoveBook.Application.Authentications.Commands.Update;
using LoveBook.Application.Authentications.Queries.GetUserByEmail;
using LoveBook.Domrin.Entities.ApplicationUsers;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Lovebook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticateController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IConfiguration _configuration;
    private readonly IMediator _mediator;

    public AuthenticateController(
        UserManager<ApplicationUser> userManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration, IMediator mediator)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _configuration = configuration;
        _mediator = mediator;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        var user = await _userManager.FindByNameAsync(model.Username);
        if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
        {
            var userRoles = await _userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
            {
                new (ClaimTypes.Name, user.UserName),
                new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

           var token = GetToken(authClaims);

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }
        return Unauthorized();
    }

    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        var result= await _mediator.Send(new RegisterCommand(model.Username, model.Password, model.Email,model.FirstName,model.LastName))
            .Match(s=>new Response { Status = "Success", Message = "User created successfully!" },
                e=>new Response { Status = "Error", Message = e });
        return Ok(result);
    }


    [HttpPost]
    [Route("updateUser")]
    [Authorize]
    public async Task<IActionResult> UpdateUser([FromBody] UpdateUserModel updateUserModel)
    {
        var result = await _mediator.Send(new UpdateUserCommand(updateUserModel.UserId, updateUserModel.FirstName,
            updateUserModel.LastName,
            updateUserModel.PhoneNumber))  
            .Match(s=>new Response { Status = "Success", Message = "User updated successfully!" },
            e=>new Response { Status = "Error", Message = e });
        return Ok(result);
    }

    [HttpGet]
    [Route("getUserByEmail/{userEmail}")]
    [Authorize]
    public async Task<IActionResult> GetUserByEmail(string userEmail)
    {
        var result = await _mediator.Send(new GetUserByEmailQuery(userEmail))
            .Match(s=>new UserDto(s.Id,s.UserName,s.Email,s.PhoneNumber,
                s.FirstName,s.LastName),e=>new UserDto("","","","","",""));
        return Ok(result);

    }

    [HttpPost]
    [Route("register-admin")]
    public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
    {
        var userExists = await _userManager.FindByNameAsync(model.Username);
        if (userExists != null)
            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

        var user = ApplicationUser.CreateUser(model.FirstName,model.LastName,model.Email,model.Username);
        var result = await _userManager.CreateAsync(user, model.Password);
        if (!result.Succeeded)
            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

        if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
            await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
        if (!await _roleManager.RoleExistsAsync(UserRoles.User))
            await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));

        if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
        {
            await _userManager.AddToRoleAsync(user, UserRoles.Admin);
        }
        if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
        {
            await _userManager.AddToRoleAsync(user, UserRoles.User);
        }
        return Ok(new Response { Status = "Success", Message = "User created successfully!" });
    }

    private JwtSecurityToken GetToken(List<Claim> authClaims)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:ValidIssuer"],
            audience: _configuration["JWT:ValidAudience"],
            expires: DateTime.Now.AddHours(3),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            );

        return token;
    }
}