namespace Lovebook.Api.Dtos.CategoriesDto;

public record AddCategoryPayLoad(long? Id,string[]? Errors = null) : Payload;
