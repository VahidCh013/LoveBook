namespace LoveBook.Application.Categories.Models;

public record CreateCategoryModel(string Name, bool IsActive, List<string> Specs);
