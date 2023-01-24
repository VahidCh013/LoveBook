using System.Dynamic;
using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;

namespace LoveBook.Domain.Entities.Categories;

public class Category:EntityBase,ITimeAudit,IDeletable
{
    public string Name { get; }
    public bool IsActive { get; protected set; }
    public List<Spec> Specs { get; private set; }
    public DateTimeOffset CreatedOn { get; }
    public DateTimeOffset ModifiedOn { get; }
    public bool IsDeleted { get; private set; }


    private Category()
    {
        
    }
    protected Category(string name, bool isActive)
    {
        Name = name;
        IsActive = isActive;
        Specs = new List<Spec>();
    }


    public static Result<Category> Create(string name, bool isActive) =>
        new Category(name, isActive);
    
    
    public Result AddSpecs(List<string> specs)
    {
        foreach (var s in specs.Select(spec => Spec.AddSpec(spec).Value))
        {
            Specs.Add(s);
        }

        return Result.Success();
    }

    public Result Deleted()
    {
        IsDeleted = true;
        return Result.Success();
    }
}