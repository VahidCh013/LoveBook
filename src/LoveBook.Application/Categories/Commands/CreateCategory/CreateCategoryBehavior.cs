
using FluentValidation;


namespace LoveBook.Application.Categories.Commands.CreateCategory;

public class CreateCategoryBehavior:AbstractValidator<CreateCategoryCommand>
{
    public CreateCategoryBehavior()
    {
        RuleFor(x => x.CategoryModel.Name).NotEmpty();
        RuleFor(x => x.CategoryModel.Specs).NotEmpty();
    }
}