
using LoveBook.Domain.Entities.Categories;
using MediatR;

namespace LoveBook.Application.Categories.Queries.GetCategoryById;

public record GetCategoryByIdQuery(long Id) : IRequest<Category>;
