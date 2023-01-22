using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Common;
using LoveBook.Domain.Entities.Categories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Infrastructure.Configurations.Categories;

public class CategoryConfiguration:IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
        builder.MapTimeAuditColumns();
        builder.MapIsDeleted();
        builder.HasMany(x => x.Specs)
            .WithOne()
            .IsRequired();
    }
}