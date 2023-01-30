using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities.Categories;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Queries.GetCategoryById;

public class GetCategoryByIdHandler:IRequestHandler<GetCategoryByIdQuery,Category>
{
    private readonly DbContextFactory<LoveBookDbContext> _contextFactory;

    public GetCategoryByIdHandler(DbContextFactory<LoveBookDbContext> contextFactory)
    {
        _contextFactory = contextFactory;
    }

    public async Task<Category> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
    {
        var db = await _contextFactory.CreateDbContextAsync(cancellationToken);
        var category =await db.Categories.Include(x=>x.Specs)
            .WithoutDeleted()
            .SingleOrDefaultAsync(x=>x.Id==request.Id, cancellationToken);
        return category;
    }
}