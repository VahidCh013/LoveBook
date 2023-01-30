namespace Lovebook.Api.Dtos.CategoriesDto.GetAllCategories;

//public record GetCategoryByIdDto(long Id,string Name,HashSet<SpecDto> Specs);

public class GetCategoryByIdDto
{
    public long Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public List<SpecDto> Specs { get; set; }
}




