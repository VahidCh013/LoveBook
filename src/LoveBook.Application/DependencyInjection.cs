using FluentValidation;
using LoveBook.Application.Authentications.Commands.Register;
using LoveBook.Application.Behaviors;
using Microsoft.Extensions.DependencyInjection;
using MediatR;

namespace LoveBook.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddMediator(this IServiceCollection services)
    {
        services.AddValidatorsFromAssembly(typeof(DependencyInjection).Assembly);
        services.AddMediatR(typeof(DependencyInjection).Assembly);

        services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        //Needs FluentValidation.AspNetCore
        //services.AddScoped<IValidator<RegisterCommand>, RegisterCommandValidator>();
        return services;
    }
}