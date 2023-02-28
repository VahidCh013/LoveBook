using CSharpFunctionalExtensions;
using LoveBook.Application.Books.Moldes;
using LoveBook.Domain.Entities.Books;
using LoveBook.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore.Internal;

namespace LoveBook.Application.Books.Commands.CreateBook;

public class CreateBookCommandHandler:IRequestHandler<CreateBookCommand,Result<CreateBookPayload>>
{
    private readonly DbContextFactory<LoveBookDbContext> _dbContext;

    public CreateBookCommandHandler(DbContextFactory<LoveBookDbContext> dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<CreateBookPayload>> Handle(CreateBookCommand request, CancellationToken cancellationToken)
    {
        var db=_dbContext.CreateDbContext();
        return await Maybe.From(db.Books.Any(x => x.Name == request.CreateBookModel.Name))
            .ToResult($"Category {request.CreateBookModel.Name} already exists")
            .Map(async _ => await db.Categories.FindAsync(request.CreateBookModel.CategoryId))
            .Map(c => Book.Create(request.CreateBookModel.Name, c))
            .Map(b => new
            {
                Book = b,
                BookSpecValues = BuildBookSpecValues(request.CreateBookModel.SpecValues, b)
            })
            .Check(s=>s.Book.AddSpecValue(s.BookSpecValues))
            .Check(s=>s.Book.SetActive(request.CreateBookModel.IsActive))
            .MapTry(async r => 
            {
                await db.Books.AddAsync(r.Book, cancellationToken);
                await db.SaveChangesAsync(cancellationToken);
                return new CreateBookPayload(r.Book.Id);
            });
    }

    private List<BookSpecValue> BuildBookSpecValues( List<SpecValueModel> specValuesModels,Book book)
    {
        var specValues = new List<BookSpecValue>();
        foreach (var specValueModel in specValuesModels)
        {
            var specValue = new BookSpecValue()
            {
                Book = book,
                Value = specValueModel.Value,
                SpecId = specValueModel.SpecId
            };
            specValues.Add(specValue);
        }
        return specValues;
    }
}