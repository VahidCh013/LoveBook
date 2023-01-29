﻿using AutoMapper;
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
            .ForMember(x=>x.Specs,opt=>opt.MapFrom(s=>MapSpecs(s)));
    }

    private HashSet<SpecDto> MapSpecs(Category category)
    {
        var specsDto = new HashSet<SpecDto>();
        foreach (var specDto in category.Specs.Select(spec => new SpecDto()
                 {
                     Id = spec.Id,
                     Name = spec.Name
                 }))
        {
            specsDto.Add(specDto);
        }

        return specsDto;
    }


}