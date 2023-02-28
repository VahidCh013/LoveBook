using LoveBook.Domain.Entities.Books;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoveBook.Infrastructure.Configurations.Books;

public class BookSpecValueConfiguration:IEntityTypeConfiguration<BookSpecValue>
{
    public void Configure(EntityTypeBuilder<BookSpecValue> builder)
    {
        builder.HasKey(x => new { x.BookId, x.SpecId });
        builder.HasOne(x => x.Book)
            .WithMany(x => x.BookSpecValues)
            .HasForeignKey(x => x.BookId)
            .OnDelete(DeleteBehavior.NoAction);;
        
        builder.HasOne(x => x.Spec)
            .WithMany(x => x.BookSpecValues)
            .HasForeignKey(x => x.SpecId)
            .OnDelete(DeleteBehavior.NoAction);
        builder.Property(x => x.Value).HasMaxLength(300);
    }
}