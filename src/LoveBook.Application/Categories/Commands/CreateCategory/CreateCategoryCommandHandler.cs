using System.Globalization;
using CSharpFunctionalExtensions;
using FluentValidation.TestHelper;
using LoveBook.Domain.Entities.Categories;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Commands.CreateCategory;

public class CreateCategoryCommandHandler:IRequestHandler<CreateCategoryCommand,Result<CreateCategoryPayload>>
{
    private readonly DbContextFactory<LoveBookDbContext> _dbContext;


    public CreateCategoryCommandHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<CreateCategoryPayload>> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
    {
        var db=_dbContext.CreateDbContext();
        return await Maybe.From(db.Categories.Any(x => x.Name == request.CategoryModel.Name))
            .ToResult($"Category {request.CategoryModel.Name} already exists")
            .Bind(_ => Category.Create(request.CategoryModel.Name, request.CategoryModel.IsActive))
            .Check(category => category.AddSpecs(request.CategoryModel.Specs))
            .MapTry(async r =>
            {
                await db.Categories.AddAsync(r, cancellationToken);
                await db.SaveChangesAsync(cancellationToken);
                return new CreateCategoryPayload(r.Id);
            },
                e=>e.Message);
    }
}