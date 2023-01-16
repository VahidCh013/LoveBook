using System.Text;
using LoveBook.Application;
using LoveBook.Domrin.Entities.ApplicationUsers;
using LoveBook.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add Cors
builder.Services.AddCors( o => o.AddPolicy( "MyPolicy", builder => {
    builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
} ) );
// Add services to the container.
builder.Services.AddMediator();



// For Entity Framework
builder.Services.AddScoped<DbContextFactory<LoveBookDbContext>>();

builder.Services.AddIdentityCore<ApplicationUser>();

builder.Services.AddDbContextFactory<LoveBookDbContext>(options => 
    options.UseSqlServer(configuration.GetConnectionString("LoveBookConnection")));

// For Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<LoveBookDbContext>()
    .AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })

// Adding Jwt Bearer
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = configuration["JWT:ValidAudience"],
            ValidIssuer = configuration["JWT:ValidIssuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
        };
    });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
 using (var scope = app.Services.CreateScope())
 {
     using (var dbContext = scope.ServiceProvider.GetRequiredService<DbContextFactory<LoveBookDbContext>>()
                .CreateDbContext())
         dbContext.Database.Migrate();
 }
app.UseCors( builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader() );

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseExceptionHandler("/error");
app.UseHttpsRedirection();
// Authentication & Authorization
app.UseAuthentication();
app.UseAuthorization();

app.UseAuthorization();

app.MapControllers();

app.Run();