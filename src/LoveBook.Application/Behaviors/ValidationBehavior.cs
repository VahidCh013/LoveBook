

using CSharpFunctionalExtensions;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;

namespace LoveBook.Application.Behaviors;

public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
    where TResponse : IResult
{
    private readonly ILogger<ValidationBehavior<TRequest, TResponse>> _logger;
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(ILogger<ValidationBehavior<TRequest, TResponse>> logger,
        IEnumerable<IValidator<TRequest>> validators)
    {
        _logger = logger;
        _validators = validators;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation($"Handling {typeof(TRequest).Name}");
        var failures = _validators
            .Select(v => v.Validate(request))
            .SelectMany(result => result.Errors)
            .Where(error => error != null)
            .ToList();
            //.ConvertAll(v=>Result.Failure<TResponse>(v.ErrorMessage));

        if (!failures.Any())
        {
            return await next();
        }

        //var errorFieldsMessages = failures.Select(x => x.ErrorMessage + ", ").ToArray();
        //throw new DetailsException("error", new ValidationFailure[] { new ValidationFailure("", "") });
        throw new ValidationException("error", failures);
        //var test=(dynamic)failures;
        //return 
    }
}