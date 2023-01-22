using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Common.DomainModelInterfaces;

public interface IDeletable
{
    public bool IsDeleted { get; }
}

public static class DeletableExtension
{

    public static IQueryable<T> WithoutDeleted<T>(this IQueryable<T> queryable)
        where T : class, IDeletable
        => queryable.Where(x => !x.IsDeleted);
}

public static class DeletableConfigurationExtensions
{
    public static void MapIsDeleted<T>(this EntityTypeBuilder<T> builder) where T : class, IDeletable
    {
        builder.Property(x => x.IsDeleted);
        builder.HasIndex(x => x.IsDeleted); }
}