using LoveBook.Domain.Common;
using LoveBook.Domain.Entities.Categories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Infrastructure.Configurations.Categories;

public class SpecConfiguration:IEntityTypeConfiguration<Spec>
{
    public void Configure(EntityTypeBuilder<Spec> builder)
    {
        builder.HasKey(x => x.Id);
        builder.MapTimeAuditColumns();
        builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
        builder.HasQueryFilter(x => !x.IsDeleted);
    }
}