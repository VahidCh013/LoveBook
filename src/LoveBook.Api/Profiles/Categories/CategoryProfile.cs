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

        CreateMap<Category, GetCategoryByIdDto>()
            .ForMember(x=>x.Specs,opt=>opt.MapFrom(s=>s.Specs));
        CreateMap<Spec, SpecDto>();
    }
}