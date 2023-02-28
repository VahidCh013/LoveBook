using System.Dynamic;
using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities.Categories;

namespace LoveBook.Domain.Entities.Books;

public class Book:EntityBase,ITimeAudit,IDeletable
{
    public string Name { get; protected set; }
    public Category  Category { get; protected set; }
    public bool IsActive { get; protected set; }

    public virtual List<BookSpecValue> BookSpecValues { get; protected set; }
    public DateTimeOffset CreatedOn { get; }
    public DateTimeOffset ModifiedOn { get; }
    public bool IsDeleted { get; }

    private Book()
    {
        
    }

    protected Book(string name, Category category)
    {
        Name = name;
        Category = category;
        BookSpecValues = new List<BookSpecValue>();
    }

    public static Book Create(string name, Category category) => new (name, category);

    public Result AddSpecValue(List<BookSpecValue> bookSpecValues)
    {
        BookSpecValues = bookSpecValues;
        return Result.Success();
    }

    public Result SetActive(bool isActive)
    {
        IsActive = isActive;
        return Result.Success();
    }
    public Result Activate()
    {
        IsActive = true;
        return Result.Success();
    }
    public Result Deactivate()
    {
        IsActive = false;
        return Result.Success();
    }
    
}