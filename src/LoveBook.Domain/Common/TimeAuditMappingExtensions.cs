using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Domain.Common;

public static class TimeAuditMappingExtensions
{
    public static void MapTimeAuditColumns<T>(this EntityTypeBuilder<T> builder) where T:EntityBase,ITimeAudit
    {
        builder.Property(x => x.ModifiedOn).IsRequired();
        builder.Property(x => x.CreatedOn).IsRequired();
    }
}