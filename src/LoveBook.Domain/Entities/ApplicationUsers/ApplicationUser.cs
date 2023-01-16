using Microsoft.AspNetCore.Identity;
namespace LoveBook.Domrin.Entities.ApplicationUsers;

public class ApplicationUser:IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}