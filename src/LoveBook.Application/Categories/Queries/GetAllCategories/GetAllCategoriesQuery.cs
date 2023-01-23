using LoveBook.Application.Categories.Models;
using LoveBook.Domain.Entities.Categories;
using MediatR;

namespace LoveBook.Application.Categories.Queries.GetAllCategories;

public record GetAllCategoriesQuery : IRequest<List<Category>>;
