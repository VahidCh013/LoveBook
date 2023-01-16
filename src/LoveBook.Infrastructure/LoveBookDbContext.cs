using LoveBook.Domrin.Entities.ApplicationUsers;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LoveBook.Infrastructure;

public class LoveBookDbContext: IdentityDbContext<ApplicationUser>
{
    
    public LoveBookDbContext(DbContextOptions<LoveBookDbContext> options) : base(options)
    {
    }
}