using System.Net.NetworkInformation;
using LoveBook.Common.DomainModelInterfaces;
using LoveBook.Domain.Common;
using LoveBook.Domain.Entities.Books;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Infrastructure.Configurations.Books;

public class BookConfiguration:IEntityTypeConfiguration<Book>
{
    public void Configure(EntityTypeBuilder<Book> builder)
    {
        builder.Property(x => x.Name).HasMaxLength(100).IsRequired();
        builder.MapIsDeleted();
        builder.MapTimeAuditColumns(); 
    }
}