namespace LoveBook.Application.Authentications.Queries.GetUserByEmail;

public sealed record UserResponse(string Id,string UserName,string Email, string PhoneNumber,string FirstName,string LastName);