using AutoMapper;
using CSharpFunctionalExtensions;
using Lovebook.Api.Dtos.CategoriesDto;
using Lovebook.Api.Dtos.CategoriesDto.GetAllCategories;
using LoveBook.Application.Categories.Commands.CreateCategory;
using LoveBook.Application.Categories.Commands.DeleteCategory;
using LoveBook.Application.Categories.Commands.DeleteSpec;
using LoveBook.Application.Categories.Commands.EditCategory;
using LoveBook.Application.Categories.Models;
using LoveBook.Application.Categories.Queries.GetAllCategories;
using LoveBook.Application.Categories.Queries.GetCategoryById;
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
    
    [Route("getCategoryById")]
    [HttpGet]
    [Authorize]
    public async Task<GetCategoryByIdDto> GetCategoryById(long id)
    {
        var result =await _mediator.Send(new GetCategoryByIdQuery(id));
        return _mapper.Map<GetCategoryByIdDto>(result);
    }
    
    [Route("deleteCategory")]
    [HttpPost]
    [Authorize]
    public async Task<DeleteCategoryPayload> DeleteCategory(long id)
    {
        return await _mediator.Send(new DeleteCategoryCommand(id))
            .Match(s => new DeleteCategoryPayload(s.Id), e => new DeleteCategoryPayload(null, e.Split(',')));
    }
    [Route("updateCategory")]
    [HttpPost]
    [Authorize]
    public async Task<EditCategoryPayload> UpdateCategory(EditCategoryModel editCategoryModel)
    {
        return await _mediator.Send(new EditCategoryCommand(editCategoryModel))
            .Match(s => new EditCategoryPayload(s.Id), e => new EditCategoryPayload(null, e.Split(',')));
    }
    
    [Route("deleteSpec")]
    [HttpPost]
    [Authorize]
    public async Task<DeleteSpecPayload> DeleteSpec( long id, long specId)
    {
        return await _mediator.Send(new DeleteSpecCommand(id,specId))
            .Match(s => new DeleteSpecPayload(s.Id), e => new DeleteSpecPayload(null, e.Split(',')));
    }
}