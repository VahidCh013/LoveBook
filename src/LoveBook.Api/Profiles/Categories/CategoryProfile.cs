using AutoMapper;
using Lovebook.Api.Dtos.CategoriesDto;
using Lovebook.Api.Dtos.CategoriesDto.GetAllCategories;
using LoveBook.Application.Categories.Models;
using LoveBook.Domain.Entities.Categories;

namespace LoveBook.Api.Profiles.Categories;

public class CategoryProfile:Profile
{
    public CategoryProfile()
    {
        CreateMap<CategoryDto, CreateCategoryModel>();

        CreateMap<Category, GetAllCategoriesDto>();
           // .ForMember(x=>x.Specs,opt=>opt.MapFrom(x=>x.Specs.ToHashSet().Select(s=>new SpecsDto(s.Id,s.Name))));
    }

    // private HashSet<SpecsDto> MapSpecs(List<Spec> specs)
    // {
    //     var specsDtos = new List<SpecsDto>();
    //     foreach (var spec in specs)
    //     {
    //         var specDto = new SpecsDto(spec.Id, spec.Name);
    //         specsDtos.Add(specDto);
    //     }
    //
    //     return specsDtos.ToHashSet();
    // }
}