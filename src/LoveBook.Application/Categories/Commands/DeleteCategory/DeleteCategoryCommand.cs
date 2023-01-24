using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Categories.Commands.DeleteCategory;

public record DeleteCategoryCommand(long CategoryId):IRequest<Result<DeleteCategoryPayload>>;

public record DeleteCategoryPayload(long? Id,string[]? Errors = null);