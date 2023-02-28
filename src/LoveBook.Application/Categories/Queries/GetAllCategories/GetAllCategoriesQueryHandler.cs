using LoveBook.Application.Categories.Models;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities.Categories;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Queries.GetAllCategories;

public class GetAllCategoriesQueryHandler:IRequestHandler<GetAllCategoriesQuery,List<Category>>
{

    private readonly DbContextFactory<LoveBookDbContext> _dbContext;

    public GetAllCategoriesQueryHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Category>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
    {
        var db =await 
        _dbContext.CreateDbContextAsync(cancellationToken);
        return  await db.Categories.WithoutDeleted().ToListAsync(cancellationToken);
    }
}