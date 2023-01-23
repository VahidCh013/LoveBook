using AutoMapper;
using CSharpFunctionalExtensions;
using Lovebook.Api.Dtos.CategoriesDto;
using Lovebook.Api.Dtos.CategoriesDto.GetAllCategories;
using LoveBook.Application.Categories.Commands.CreateCategory;
using LoveBook.Application.Categories.Models;
using LoveBook.Application.Categories.Queries.GetAllCategories;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lovebook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoryController:ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public CategoryController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }

    [Route("addCategory")]
    [HttpPost]
    [Authorize]
    public async Task<AddCategoryPayLoad> AddCategoryAsync(CategoryDto category)
    {
        var categoryModel = _mapper.Map<CreateCategoryModel>(category);
        return await _mediator.Send(new CreateCategoryCommand(categoryModel))
            .Match(s => new AddCategoryPayLoad(s.Id), e => new AddCategoryPayLoad(null, e.Split(',')));
    }


    [Route("GetAllCategories")]
    [HttpGet]
    [Authorize]
    public async Task<List<GetAllCategoriesDto>> GetAllCategories()
    {
        var result =await _mediator.Send(new GetAllCategoriesQuery());
        return _mapper.Map<List<GetAllCategoriesDto>>(result);
    }
}