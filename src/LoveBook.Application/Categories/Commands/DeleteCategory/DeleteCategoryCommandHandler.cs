using CSharpFunctionalExtensions;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Commands.DeleteCategory;

public class DeleteCategoryCommandHandler:IRequestHandler<DeleteCategoryCommand,Result<DeleteCategoryPayload>>
{

    private readonly DbContextFactory<LoveBookDbContext> _dbContextFactory;

    public DeleteCategoryCommandHandler(DbContextFactory<LoveBookDbContext> dbContextFactory)
    {
        _dbContextFactory = dbContextFactory;
    }

    public async Task<Result<DeleteCategoryPayload>> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        var db =await _dbContextFactory.CreateDbContextAsync(cancellationToken);
        var category = await db.Categories.FindAsync(request.CategoryId);
        return await Maybe.From(category)
            .ToResult($"Category not found")
            .Check(_ =>category.Deleted())
            .MapTry(async r =>
            {
                await db.SaveChangesAsync(cancellationToken);
                return new DeleteCategoryPayload(Id: r.Id);
            },e=>e.Message);
    }
}