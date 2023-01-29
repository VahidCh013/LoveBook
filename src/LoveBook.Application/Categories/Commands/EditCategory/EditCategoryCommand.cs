using CSharpFunctionalExtensions;
using LoveBook.Application.Categories.Models;
using MediatR;

namespace LoveBook.Application.Categories.Commands.EditCategory;

public record EditCategoryCommand(EditCategoryModel EditCategoryModel):IRequest<Result<EditCategoryPayload>>;

public record EditCategoryPayload(long? Id, string[]? Errors=null);