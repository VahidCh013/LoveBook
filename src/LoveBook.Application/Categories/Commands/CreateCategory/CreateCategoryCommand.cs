using CSharpFunctionalExtensions;
using LoveBook.Application.Categories.Models;
using MediatR;

namespace LoveBook.Application.Categories.Commands.CreateCategory;

public record CreateCategoryCommand(CreateCategoryModel CategoryModel) : IRequest<Result<CreateCategoryPayload>>;

public record CreateCategoryPayload(long? Id,string[]? Errors = null);
    
    
