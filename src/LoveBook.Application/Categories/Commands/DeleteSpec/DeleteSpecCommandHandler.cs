using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Categories.Commands.DeleteSpec;

public class DeleteSpecCommandHandler:IRequestHandler<DeleteSpecCommand,Result<DeleteSpecPayload>>
{

    private readonly DbContextFactory<LoveBookDbContext> _contextFactory;

    public DeleteSpecCommandHandler(DbContextFactory<LoveBookDbContext> contextFactory)
    {
        _contextFactory = contextFactory;
    }

    public async Task<Result<DeleteSpecPayload>> Handle(DeleteSpecCommand request, CancellationToken cancellationToken)
    {
        var db = await _contextFactory.CreateDbContextAsync(cancellationToken);
        var category = await db.Categories.Include(x => x.Specs)
            .WithoutDeleted()
            .SingleOrDefaultAsync(x => x.Id == request.Id, cancellationToken: cancellationToken);
        return await Maybe.From(category)
            .ToResult($"No category found for Id {request.Id} ")
            .Check(_ => category.DeleteSpec(request.SpecId))
            .MapTry(async result =>
            {
                await db.SaveChangesAsync(cancellationToken);
                return new DeleteSpecPayload(result.Id);
            }, e => e.Message);
    }
}