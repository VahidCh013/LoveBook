using System.Dynamic;
using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;

namespace LoveBook.Domain.Entities.Categories;

public class Spec : EntityBase,ITimeAudit
{
    public string Name { get;private set;}
    public DateTimeOffset CreatedOn { get; }
    public DateTimeOffset ModifiedOn { get; }

    protected Spec(string name)
    {
        Name = name;

    }

    public static Result<Spec> AddSpec(string name) => new Spec(name);
}