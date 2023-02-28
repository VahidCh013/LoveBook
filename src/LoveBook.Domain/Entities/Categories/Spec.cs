using System.Dynamic;
using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities.Books;

namespace LoveBook.Domain.Entities.Categories;

public class Spec : EntityBase,ITimeAudit
{
    public string Name { get;protected set;}
    public DateTimeOffset CreatedOn { get; }
    public DateTimeOffset ModifiedOn { get; }
    public bool IsDeleted { get; protected set; }
    public virtual List<BookSpecValue> BookSpecValues { get; set; }

    protected Spec(string name)
    {
        Name = name;

    }

    public static Result<Spec> Create(string name) => new Spec(name);


    public Result Delete()
    {
        IsDeleted = true;
        return Result.Success();
    }
    public Result SetName(string name)
    {
        if (Name == name)
            return Result.Success();
        Name = name;
        return Result.Success();
    } 
}