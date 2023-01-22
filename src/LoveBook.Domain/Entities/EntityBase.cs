using CSharpFunctionalExtensions;

namespace LoveBook.Domain.Entities;

public class EntityBase:Entity<long>
{
    protected EntityBase()
    {
        
    }
    protected EntityBase(long id) : base(id)
    {
    }
}