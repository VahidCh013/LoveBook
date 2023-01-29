using LoveBook.Domain.Common.Models;

namespace LoveBook.Application.Categories.Models;

public record EditCategoryModel(long Id,string Name, bool IsActive, List<SpecModel> Specs);