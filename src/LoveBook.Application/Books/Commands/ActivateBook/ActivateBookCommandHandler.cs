using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Books.Commands.ActivateBook;

public class ActivateBookCommandHandler:IRequestHandler<ActivateBookCommand,Result<ActivateBookPayload>>
{
    private readonly DbContextFactory<LoveBookDbContext> _dbContext;

    public ActivateBookCommandHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<ActivateBookPayload>> Handle(ActivateBookCommand request, CancellationToken cancellationToken)
    {
        var db = await _dbContext.CreateDbContextAsync(cancellationToken);
        var category = await db.Books
            .WithoutDeleted().SingleOrDefaultAsync(x => x.Id == request.BookId, cancellationToken);
        return await Maybe.From(category)
            .ToResult($"No category found for Id{request.BookId}")
            .Check(x=>x.Activate())
            .MapTry(async r =>
            {
                await db.SaveChangesAsync(cancellationToken);
                return new ActivateBookPayload(r.Id);
            }, e => e.Message);
        
    }
}