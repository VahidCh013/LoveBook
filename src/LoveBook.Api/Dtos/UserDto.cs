namespace Lovebook.Api.Dtos;

public record UserDto(string? Id,string? UserName,
    string? Email, string? PhoneNumber,
    string? FirstName,string? LastName):Payload;


public record Payload
{
    public string? Error { get; set; }
}