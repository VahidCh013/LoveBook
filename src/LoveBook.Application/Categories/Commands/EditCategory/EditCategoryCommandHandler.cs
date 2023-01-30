

using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Commands.EditCategory;

public class EditCategoryCommandHandler:IRequestHandler<EditCategoryCommand,Result<EditCategoryPayload>>
{
    private readonly DbContextFactory<LoveBookDbContext> _contextFactory;

    public EditCategoryCommandHandler(DbContextFactory<LoveBookDbContext> contextFactory)
    {
        _contextFactory = contextFactory;
    }

    public async Task<Result<EditCategoryPayload>> Handle(EditCategoryCommand request,
        CancellationToken cancellationToken)
    {
        var db = await _contextFactory.CreateDbContextAsync(cancellationToken);
        var category = await db.Categories.Include(x=>x.Specs)
            .WithoutDeleted().SingleOrDefaultAsync(x => x.Id == request.EditCategoryModel.Id, cancellationToken);
        return await Maybe.From(category)
            .ToResult($"No category found for Id{request.EditCategoryModel.Id}")
            .Check(_ => category.SetName(request.EditCategoryModel.Name))
            .Check(c => c.SetIsActive(request.EditCategoryModel.IsActive))
            .Check(c => c.SetSpecs(request.EditCategoryModel.Specs))
            .MapTry(async r =>
            {
                await db.SaveChangesAsync(cancellationToken);
                return new EditCategoryPayload(r.Id);

            }, e => e.Message);
    }
}