namespace Lovebook.Api.Dtos.CategoriesDto;

public class CategoryDto
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public List<string> Specs { get; set; }
}