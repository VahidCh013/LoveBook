using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LoveBook.Infrastructure;

public class LoveBookDbContext: IdentityDbContext<IdentityUser>
{
    public LoveBookDbContext(DbContextOptions<LoveBookDbContext> options) : base(options)
    {
    }


}