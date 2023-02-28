using System.Reflection;
using LoveBook.Domain.Entities.ApplicationUsers;
using LoveBook.Domain.Entities.Books;
using LoveBook.Domain.Entities.Categories;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LoveBook.Infrastructure;

public class LoveBookDbContext: IdentityDbContext<ApplicationUser>
{
    public DbSet<Category> Categories { get; set; }
    public DbSet<Book> Books { get; set; }
    public LoveBookDbContext(DbContextOptions<LoveBookDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly()??
            throw new
                InvalidOperationException(
                    $"Could not apply EF configurations because no assembly was found for type {nameof(LoveBookDbContext)}."));
        base.OnModelCreating(builder);
    }

}