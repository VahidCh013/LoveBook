using System.Dynamic;
using CSharpFunctionalExtensions;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Common.Models;

namespace LoveBook.Domain.Entities.Categories;

public class Category:EntityBase,ITimeAudit,IDeletable
{
    public string Name { get; protected set; }
    public bool IsActive { get; protected set; }
    public List<Spec> Specs { get; protected set; }
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
        foreach (var s in specs.Select(spec => Spec.Create(spec).Value))
        {
            Specs.Add(s);
        }
        return Result.Success();
    }
    
    public Result SetSpecs(List<SpecModel> specsModel)
    {
        var specs = new List<Spec>();
        foreach (var specModel in specsModel)
        {
            var spec = Specs.SingleOrDefault(x => x.Id == specModel.Id);
            if (spec is null)
            {
                var newSpec = Spec.Create(specModel.Name).Value;
                specs.Add(newSpec);
            }
            else
            {
                spec.SetName(specModel.Name);
            }
        }
        Specs.AddRange(specs);
        return Result.Success();
    }

    public Result SetName(string name)
    {
        Name = name;
        return Result.Success();
    }
    
    public Result SetIsActive(bool isActive)
    {
        IsActive = isActive;
        return Result.Success();
    }


    public Result Deleted()
    {
        IsDeleted = true;
        return Result.Success();
    }

    public Result DeleteSpec(long specId)
    {
        var spec = Specs.SingleOrDefault(x => x.Id == specId && !x.IsDeleted);
        if (spec is null)
            return Result.Failure($"No Spec found for Id {specId}");
        spec.Delete();
        return Result.Success();
    }
}