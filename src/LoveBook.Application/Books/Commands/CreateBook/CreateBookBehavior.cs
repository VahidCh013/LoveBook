using FluentValidation;

namespace LoveBook.Application.Books.Commands.CreateBook;

public class CreateBookBehavior:AbstractValidator<CreateBookCommand>
{
    public CreateBookBehavior()
    {
        RuleFor(x => x.CreateBookModel.Name).NotEmpty();
        RuleFor(x => x.CreateBookModel.SpecValues).NotEmpty();
        RuleFor(x => x.CreateBookModel.CategoryId).NotEmpty();
    }
}