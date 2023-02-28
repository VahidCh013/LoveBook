

using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities.Books;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Books.Queries.GetAllBooks;

public class GetAllBooksQueryHandler : IRequestHandler<GetAllBooksQuery, List<Book>>
{
    private readonly DbContextFactory<LoveBookDbContext> _dbContext;

    public GetAllBooksQueryHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Book>> Handle(GetAllBooksQuery request, CancellationToken cancellationToken)
    {
        var db =await 
            _dbContext.CreateDbContextAsync(cancellationToken);
        return await db.Books
            .Include(x=>x.Category)
            .WithoutDeleted().ToListAsync(cancellationToken);
    }
}