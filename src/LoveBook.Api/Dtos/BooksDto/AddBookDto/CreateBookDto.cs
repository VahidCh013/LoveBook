namespace Lovebook.Api.Dtos.BooksDto.AddBookDto;

public record CreateBookDto(string Name, bool IsActive, List<SpecValueDto> SpecValues,long CategoryId);

public record SpecValueDto(long SpecId, string Value);

