using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Books.Commands.DeactivateBook;

public class DeactivateBookCommandHandler:IRequestHandler<DeactivateBookCommand,Result<DeactivateBookPayload>>
{
    private readonly DbContextFactory<LoveBookDbContext> _dbContext;

    public DeactivateBookCommandHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<DeactivateBookPayload>> Handle(DeactivateBookCommand request, CancellationToken cancellationToken)
    {
        var db = await _dbContext.CreateDbContextAsync(cancellationToken);
        var book = await db.Books
            .WithoutDeleted().SingleOrDefaultAsync(x => x.Id == request.BookId, cancellationToken);
        return await Maybe.From(book)
            .ToResult($"No category found for Id:{request.BookId}")
            .Check(x=>x.Deactivate())
            .MapTry(async r =>
            {
                await db.SaveChangesAsync(cancellationToken);
                return new DeactivateBookPayload(r.Id);
            }, e => e.Message);
        
    }
}