using Microsoft.AspNetCore.Identity;
namespace LoveBook.Domrin.Entities.ApplicationUsers;

public sealed class ApplicationUser:IdentityUser
{
    public string FirstName { get; private set; }
    public string LastName { get; private set;}


    private ApplicationUser()
    {
        
    }

    private ApplicationUser(string firstName, string lastName,string email,string userName)
    {
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        SecurityStamp = Guid.NewGuid().ToString();
        UserName = userName;
    }


    public static ApplicationUser CreateUser(string firstName, string lastName,string email,string userName) 
        => new ( firstName,  lastName, email, userName);
    

    public void UpdateFirstName(string firstName) => FirstName = firstName;
    public void UpdateLastName(string lastname) => LastName = lastname; 
    public void UpdatePhoneNumber(string phoneNumber) => PhoneNumber = phoneNumber;
}