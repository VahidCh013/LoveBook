using CSharpFunctionalExtensions;
using MediatR;

namespace LoveBook.Application.Categories.Commands.DeleteSpec;

public record DeleteSpecCommand(long Id,long SpecId) : IRequest<Result<DeleteSpecPayload>>;


public record DeleteSpecPayload(long? Id, string[]? Errors=null);
